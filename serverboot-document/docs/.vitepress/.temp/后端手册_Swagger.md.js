import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"Swagger","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65B0\u5EFA\u9879\u76EE","slug":"\u65B0\u5EFA\u9879\u76EE","link":"#\u65B0\u5EFA\u9879\u76EE","children":[]},{"level":2,"title":"\u6DFB\u52A0Swagger","slug":"\u6DFB\u52A0swagger","link":"#\u6DFB\u52A0swagger","children":[]},{"level":2,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6","link":"#\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":2,"title":"\u63A7\u5236\u5C42","slug":"\u63A7\u5236\u5C42","link":"#\u63A7\u5236\u5C42","children":[]}],"relativePath":"\u540E\u7AEF\u624B\u518C/Swagger.md","lastUpdated":1665741824000}');
const _sfc_main = { name: "\u540E\u7AEF\u624B\u518C/Swagger.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="swagger" tabindex="-1">Swagger <a class="header-anchor" href="#swagger" aria-hidden="true">#</a></h1><h2 id="\u65B0\u5EFA\u9879\u76EE" tabindex="-1">\u65B0\u5EFA\u9879\u76EE <a class="header-anchor" href="#\u65B0\u5EFA\u9879\u76EE" aria-hidden="true">#</a></h2><blockquote><p>\u65B0\u5EFA</p></blockquote><p>\u6253\u5F00<code>IDEA</code>\uFF0C\u70B9\u51FB\u5DE6\u4E0A\u89D2<code>File</code>\u3001<code>New</code>\u3001<code>Project</code></p><blockquote><p>\u914D\u7F6E</p></blockquote><p>\u521D\u59CB\u5316\u5730\u5740\u680F<code>Spring Initializr Server URL</code>\uFF1A<code>https://start.aliyun.com</code></p><p>\u540D\u79F0<code>Name</code>\uFF1A<code>ServerBoot</code></p><p>\u4F4D\u7F6E<code>Location</code>\uFF1A<code>~\\Desktop\\mine\\ServerBoot</code></p><p>\u8BED\u8A00<code>Language</code>\uFF1A<code>Java</code></p><p>\u7C7B\u578B<code>Type</code>\uFF1A<code>Maven</code></p><p>\u7EC4<code>Group</code>\uFF1A<code>com.javaboy</code></p><p>\u5750\u6807<code>Artifact</code>\uFF1A<code>ServerBoot</code></p><p>\u5305\u540D\u79F0<code>Package name</code>\uFF1A<code>com.javaboy</code></p><p>\u9879\u76EEJDK\u7248\u672C<code>Project SDK</code>\uFF1A<code>1.8</code></p><p>Java\uFF1A<code>8</code></p><p>\u6253\u5305\u7C7B\u578B<code>Packaging</code>\uFF1A<code>Jar</code></p><blockquote><p>\u4F9D\u8D56</p></blockquote><p>\u70B9\u51FB<code>next</code>\uFF0C<code>Spring Boot</code>\u9009\u62E9\uFF1A2.4.1\uFF0C\u70B9\u51FB<code>Web</code>\uFF0C\u52FE\u9009<code>Spring Web</code>\uFF0C\u70B9\u51FB<code>Finish</code>\u3002</p><h2 id="\u6DFB\u52A0swagger" tabindex="-1">\u6DFB\u52A0Swagger <a class="header-anchor" href="#\u6DFB\u52A0swagger" aria-hidden="true">#</a></h2><p><code>pom.xml</code></p><div class="language-xml"><button class="copy"></button><span class="lang">xml</span><pre><code><span class="line"><span style="${ssrRenderStyle({ "color": "#616E88" })}">&lt;!-- OpenAPI3\u5EFA\u8BAE\u4F7F\u7528springdoc-openapi\u9879\u76EE --&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">&lt;dependency&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">    </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">&lt;groupId&gt;</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">org.springdoc</span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">&lt;/groupId&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">    </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">&lt;artifactId&gt;</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">springdoc-openapi-ui</span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">&lt;/artifactId&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">    </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">&lt;version&gt;</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">1.6.11</span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">&lt;/version&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">&lt;/dependency&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h2><p><code>SwaggerConfig</code></p><div class="language-java"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">@</span><span style="${ssrRenderStyle({ "color": "#D08770" })}">Configuration</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">public</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">class</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#8FBCBB" })}">SwaggerConfig</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">{</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">    </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">@</span><span style="${ssrRenderStyle({ "color": "#D08770" })}">Bean</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">    </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">public</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#8FBCBB" })}">GroupedOpenApi</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">swagger</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">        </span><span style="${ssrRenderStyle({ "color": "#8FBCBB" })}">String</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">[]</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D8DEE9" })}">paths</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">=</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">{</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A3BE8C" })}">/swagger/**</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">}</span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">        </span><span style="${ssrRenderStyle({ "color": "#8FBCBB" })}">String</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">[]</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D8DEE9" })}">packagedToMatch</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">=</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">{</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A3BE8C" })}">com.javaboy.swagger.controller</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">}</span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">        </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">return</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D8DEE9" })}">GroupedOpenApi</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">.</span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">builder</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">().</span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">group</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A3BE8C" })}">Swagger\u6A21\u5757</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">                </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">.</span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">pathsToMatch</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">paths</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">                </span><span style="${ssrRenderStyle({ "color": "#616E88" })}">// \u8BF7\u6C42\u5934\u5305\u542B\u6388\u6743\u7801</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">                </span><span style="${ssrRenderStyle({ "color": "#616E88" })}">// .addOperationCustomizer((operation, handlerMethod) -&gt; {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">                </span><span style="${ssrRenderStyle({ "color": "#616E88" })}">//    return operation.addParametersItem(new HeaderParameter().name(&quot;Authorization&quot;).example(&quot;Authorization&quot;).description(&quot;\u6388\u6743\u7801&quot;).schema(new StringSchema()._default(&quot;Authorization&quot;).name(&quot;\u8BF7\u6C42\u5934&quot;).description(&quot;\u6388\u6743\u7801&quot;)));</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">                </span><span style="${ssrRenderStyle({ "color": "#616E88" })}">// })</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">                </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">.</span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">packagesToScan</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">packagedToMatch</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">).</span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">build</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">()</span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">    </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">    </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">@</span><span style="${ssrRenderStyle({ "color": "#D08770" })}">Bean</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">    </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">public</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#8FBCBB" })}">OpenAPI</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">customOpenAPI</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">()</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">        </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">return</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">new</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">OpenAPI</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">()</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">                </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">.</span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">info</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(</span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">new</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">Info</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">()</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">                        </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">.</span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">title</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A3BE8C" })}">javaboy\u7528\u6237\u7CFB\u7EDFAPI</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">                        </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">.</span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">version</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A3BE8C" })}">1.0</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">                        </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">.</span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">description</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A3BE8C" })}">\u4E00\u4E2A\u7B80\u5355\u7684SpringBoot\u670D\u52A1\u811A\u624B\u67B6</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">                        </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">.</span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">termsOfService</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A3BE8C" })}">https://github.com/ShenJinyong/</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">                        </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">.</span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">license</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(</span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">new</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">License</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">().</span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">name</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A3BE8C" })}">Apache 2.0</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">                                </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">.</span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">url</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A3BE8C" })}">https://www.apache.org/licenses/LICENSE-2.0.html</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">)))</span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">    </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u63A7\u5236\u5C42" tabindex="-1">\u63A7\u5236\u5C42 <a class="header-anchor" href="#\u63A7\u5236\u5C42" aria-hidden="true">#</a></h2><div class="language-java"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">@</span><span style="${ssrRenderStyle({ "color": "#D08770" })}">Tag</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(</span><span style="${ssrRenderStyle({ "color": "#D8DEE9" })}">name</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">=</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A3BE8C" })}">\u6587\u6863\u6A21\u5757</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">@</span><span style="${ssrRenderStyle({ "color": "#D08770" })}">RestController</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">@</span><span style="${ssrRenderStyle({ "color": "#D08770" })}">RequestMapping</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A3BE8C" })}">/swagger</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">public</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">class</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#8FBCBB" })}">SwaggerController</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">{</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">    </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">@</span><span style="${ssrRenderStyle({ "color": "#D08770" })}">Parameter</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(</span><span style="${ssrRenderStyle({ "color": "#D8DEE9" })}">name</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">=</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A3BE8C" })}">name</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">,</span><span style="${ssrRenderStyle({ "color": "#D8DEE9" })}">description</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">=</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A3BE8C" })}">\u59D3\u540D</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">,</span><span style="${ssrRenderStyle({ "color": "#D8DEE9" })}">required</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">=</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">true</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">    </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">@</span><span style="${ssrRenderStyle({ "color": "#D08770" })}">Operation</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(</span><span style="${ssrRenderStyle({ "color": "#D8DEE9" })}">summary</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">=</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A3BE8C" })}">\u5411\u5BA2\u4EBA\u95EE\u597D</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">    </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">@</span><span style="${ssrRenderStyle({ "color": "#D08770" })}">GetMapping</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A3BE8C" })}">/sayHi</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">    </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">public</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#8FBCBB" })}">ResponseEntity</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#8FBCBB" })}">String</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">sayHi</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(@</span><span style="${ssrRenderStyle({ "color": "#D08770" })}">RequestParam</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(</span><span style="${ssrRenderStyle({ "color": "#D8DEE9" })}">value</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">=</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A3BE8C" })}">name</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">)</span><span style="${ssrRenderStyle({ "color": "#8FBCBB" })}">String</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D8DEE9" })}">name</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">        </span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">return</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D8DEE9" })}">ResponseEntity</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">.</span><span style="${ssrRenderStyle({ "color": "#88C0D0" })}">ok</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">(</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A3BE8C" })}">Hi:</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">+</span><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">name</span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">)</span><span style="${ssrRenderStyle({ "color": "#81A1C1" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D8DEE9FF" })}">    </span><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ECEFF4" })}">}</span></span>
<span class="line"></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u540E\u7AEF\u624B\u518C/Swagger.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Swagger = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Swagger as default
};
