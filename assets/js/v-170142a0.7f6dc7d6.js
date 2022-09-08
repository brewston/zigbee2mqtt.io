"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[72884],{83315:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-170142a0",path:"/devices/SP_110.html",title:"Innr SP 110 control via MQTT",lang:"en-US",frontmatter:{title:"Innr SP 110 control via MQTT",description:"Integrate your Innr SP 110 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-04-23T20:00:00.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Specs",slug:"specs",children:[]},{level:3,title:"Manual",slug:"manual",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SP_110.md",git:{updatedTime:1662622373e3}}},7812:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var i=a(66252);const r=(0,i.uE)('<h1 id="innr-sp-110" tabindex="-1"><a class="header-anchor" href="#innr-sp-110" aria-hidden="true">#</a> Innr SP 110</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SP 110</td></tr><tr><td>Vendor</td><td>Innr</td></tr><tr><td>Description</td><td>Smart plug</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SP-110.jpg" alt="Innr SP 110"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pairing can be started by holding a magnet below to power button. The LED is then starting to blink during pairing process.</p><h3 id="specs" tabindex="-1"><a class="header-anchor" href="#specs" aria-hidden="true">#</a> Specs</h3><ul><li>Rating: 220-240VAC, 10A, 50Hz</li><li>Standby Power: &lt;= 0.5W</li></ul><h3 id="manual" tabindex="-1"><a class="header-anchor" href="#manual" aria-hidden="true">#</a> Manual</h3>',8),d={href:"https://www.zigbee2mqtt.io/manuals/devices/SP_110.pdf",target:"_blank",rel:"noopener noreferrer"},n=(0,i.Uk)("Supplier's manual"),o=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),s={},l=(0,a(83744).Z)(s,[["render",function(e,t){const a=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,(0,i._)("p",null,[(0,i._)("a",d,[n,(0,i.Wm)(a)])]),o],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);