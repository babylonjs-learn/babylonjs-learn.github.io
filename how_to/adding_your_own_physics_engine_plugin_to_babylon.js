<!DOCTYPE html><html style="height:100%;"><head lang="en"><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="google-site-verification" content="wcRjktXhF6DAjmhneKS7UatweBIkEF6QfqsNhAYbUgg"><title>Babylon.js Documentation</title><link rel="shortcut icon" href="/img/favicon.ico"><meta name="msapplication-TileColor" content="#ffffff"><meta name="theme-color" content="#ffffff"><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css"><link rel='stylesheet' href='https://d33wubrfki0l68.cloudfront.net/bundles/37aa8c7514aff1371f0c105a5847611a9179804e.css'/><link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.6.3/css/perfect-scrollbar.min.css"><link rel='stylesheet' href='https://d33wubrfki0l68.cloudfront.net/css/5631ef06a1312cbb76f0232ae55f318441e2a6cb/css/main.css'/><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/default.min.css"></head><body><nav id="menu"></nav><nav class="nav-main" style="position:inherit;"><!-- Hamburger menu : displayed only in small screens--><i class="fa fa-bars" id="mobilemenu"></i><div class="banner"><div class="menu"><div class="do-not-hover" id="home"><a href="/">HOME</a></div><div class="item" id="whatsnew"><a href="/whats-new">What's new</a></div><div class="item" id="feature"><a href="/babylon101">Babylon 101      </a></div><div class="item" id="feature"><a href="/examples">Examples                        </a></div><div class="item active" id="How_To"><a href="/How_To">How To...</a></div><div class="item" id="feature"><a href="/features">Features</a></div><div class="item" id="resources"><a href="/resources">Resources</a></div><div class="item" id="extensions"><a href="/extensions">Extensions</a></div><div class="item" id="samples"><a href="/snippets">Snippets        </a></div><div class="item" id="classes"><a href="/api">API</a></div><div class="item" id="playground"><a href="/playground">Playground</a></div></div><div class="more"><div class="searchbar"><form method="get" action="/search"><input type="text" name="bjsq" placeholder="Search..."><button type="submit"><i class="fa fa-search"></i></button></form></div></div></div></nav><div id="wrapper"><div class="statics-banner"><h1>How To</h1></div><div class="horizontal-separator"></div><div class="static-content"><h1>Add Your Own Physics Engine Plugin</h1><br><div class="contentTable"><div class="tocHeader"><span class="tocTitle"><i class="tocIcon fa fa-book"></i>Table of contents</span><span class="tocToggle"><i class="fa fa-arrow-up"></i></span></div><div class="tocContent"><ul>
<li><a href="#how-to-add-your-own-physics-engine">How To Add Your Own Physics Engine</a><ul>
<li><a href="#define-your-plugin">Define your plugin</a></li>
<li><a href="#using-your-plugin">Using your plugin</a></li>
</ul>
</li>
</ul>
</div></div><div id="staticContent"><h1><a name="how-to-add-your-own-physics-engine" class="anchor" href="#how-to-add-your-own-physics-engine"></a>How To Add Your Own Physics Engine</h1><h2><a name="define-your-plugin" class="anchor" href="#define-your-plugin"></a>Define your plugin</h2><p>You can create your own plugin by creating a class that provides the following interface:</p>
<ul>
<li><p><code>function initialize()</code>: Must initialize your engine</p>
</li>
<li><p><code>function setGravity(gravity)</code>: Used by Babylon.js to set the current gravity</p>
</li>
<li><p><code>function runOneStep(delta)</code>: babylon.js will call this function for each frame, giving you the delta time between current and previous frame. This is the responsibility of the plugin to update meshes&#39; position and rotation accordingly to the physics simulation.</p>
</li>
<li><p><code>function registerMesh(mesh, impostor, options)</code>: babylon.js will call this function when the user wants to create a physics impostor for a mesh. <code>options</code> parameter contains 3 values: <code>mass</code>, <code>friction</code> and <code>restitution</code>. Possible values for <code>impostor</code> are the following:</p>
<ul>
<li>NoImpostor = 0;</li>
<li>SphereImpostor = 1;</li>
<li>BoxImpostor = 2;</li>
<li>PlaneImpostor = 3;</li>
<li>CompoundImpostor = 4;</li>
<li>MeshImpostor = 4;</li>
</ul>
</li>
<li><p><code>function registerMeshesAsCompound(parts, options)</code>: Babylon.js will call this function for compound objects. <code>parts</code> parameter contains an array of <code>{mesh, impostor}</code>. <code>options</code> parameter is the same as above.</p>
</li>
<li><p><code>function unregisterMesh(mesh)</code>: Called to remove a mesh from the simulation</p>
</li>
<li><p><code>function applyImpulse(mesh, force, contactPoint)</code>: Apply a specific force to a specific contact point for a given mesh</p>
</li>
<li><p><code>function createLink(mesh1, mesh2, pivot1, pivot2)</code>: Create a joint between two meshes</p>
</li>
<li><p><code>function dispose()</code>: Free all allocated resources</p>
</li>
<li><p><code>function isSupported()</code>: This function will be called by Babylon.js before everything else to ensure that your plugin can be instanciated (You have to check if required .js files are included for instance)</p>
</li>
</ul>
<p>For implementation details, you can refer to cannon.js plugin: <a href="https://github.com/BabylonJS/Babylon.js/blob/master/Babylon/Physics/Plugins/babylon.cannonJSPlugin.js">https://github.com/BabylonJS/Babylon.js/blob/master/Babylon/Physics/Plugins/babylon.cannonJSPlugin.js</a></p>
<h2><a name="using-your-plugin" class="anchor" href="#using-your-plugin"></a>Using your plugin</h2><p>When you launch the physics simulation, you can add a new parameter to <code>enablePhysics</code> function to indicate which plugin to use:</p>
<pre><code class="lang-javascript">scene.enablePhysics(null, new BABYLON.CannonJSPlugin()),
</code></pre>
<p>The first parameter can be used to define gravity (which is (0, -9.82, 0) by default).</p>
</div></div></div><footer class="footer"><div class="footer-item"><a href="https://www.babylonjs.com" target="_blank"><i class="fa fa-home"></i>    Babylonjs.com</a></div><div class="footer-item"><a href="https://forum.babylonjs.com" target="_blank"><i class="fa fa-html5"></i>    Forum</a></div><div class="footer-item"><a href="https://github.com/BabylonJS/Babylon.js" target="_blank"><i class="fa fa-github"></i>    Github</a></div><div class="footer-item"><a href="https://github.com/BabylonJS/Documentation" target="_blank"><i class="fa fa-code-fork"></i>    Contribute </a></div><div class="footer-item"><a href="https://www.netlify.com" target="_blank"><i class="fa fa-heart"></i> Deployed by netlify            </a></div></footer><script src='https://d33wubrfki0l68.cloudfront.net/js/6c5a0bab19aff39c2bf01a14bac330e9140b5cef/js/jquery.min.js'></script><script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/highlight.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/slideout/0.1.9/slideout.min.js"></script><script src='https://d33wubrfki0l68.cloudfront.net/js/f48cb004d8126ebe06fa08e7ec362ddee7ff288d/js/index.js'></script><script>(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            };
    i[r].l = 1 * new Date();
    a = s.createElement(o);
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-41767310-3', 'auto');
ga('send', 'pageview');</script><!-- HIGHLIGHT JS--><script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.6/highlight.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.6/languages/javascript.min.js"></script><script src='https://d33wubrfki0l68.cloudfront.net/js/8e913e925d28c3a3ec0d9d587b542f849196f745/js/static.js'></script><script>$('code').each(function(){
    $(this).text($(this).text().replace(/&nbsp;/gi, ''));
});
hljs.initHighlightingOnLoad();</script></body></html>