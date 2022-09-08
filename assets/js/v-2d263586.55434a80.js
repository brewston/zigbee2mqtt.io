"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[60102],{29336:(e,o,t)=>{t.r(o),t.d(o,{data:()=>a});const a={key:"v-2d263586",path:"/devices/SIRZB-110.html",title:"Develco Products A/S SIRZB-110 control via MQTT",lang:"en-US",frontmatter:{title:"Develco Products A/S SIRZB-110 control via MQTT",description:"Integrate your Develco Products A/S SIRZB-110 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-08-22T21:01:09.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Warning usage",slug:"warning-usage",children:[]},{level:3,title:"Triggering the alarm, Advanced",slug:"triggering-the-alarm-advanced",children:[]},{level:3,title:"Triggering alarm, Simple",slug:"triggering-alarm-simple",children:[]},{level:3,title:"Squawk",slug:"squawk",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Test (binary)",slug:"test-binary",children:[]},{level:3,title:"Warning (composite)",slug:"warning-composite",children:[]},{level:3,title:"Squawk (composite)",slug:"squawk-composite",children:[]},{level:3,title:"Max_duration (numeric)",slug:"max-duration-numeric",children:[]},{level:3,title:"Alarm (binary)",slug:"alarm-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SIRZB-110.md",git:{updatedTime:1662622373e3}}},53059:(e,o,t)=>{t.r(o),t.d(o,{default:()=>l});var a=t(66252);const d=(0,a.uE)('<h1 id="develco-products-a-s-sirzb-110" tabindex="-1"><a class="header-anchor" href="#develco-products-a-s-sirzb-110" aria-hidden="true">#</a> Develco Products A/S SIRZB-110</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SIRZB-110</td></tr><tr><td>Vendor</td><td>Develco Products A/S</td></tr><tr><td>Description</td><td>Customizable siren</td></tr><tr><td>Exposes</td><td>battery, battery_low, test, warning, squawk, max_duration, alarm, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SIRZB-110.jpg" alt="Develco Products A/S SIRZB-110"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="warning-usage" tabindex="-1"><a class="header-anchor" href="#warning-usage" aria-hidden="true">#</a> Warning usage</h3><p>Duration of using <code>warning</code> can be shorter than <code>max_duration</code> but not longer. If <code>max_duration</code> are set to 60 seconds, and you try to set <code>warning</code> with <code>duration</code> of 90 seconds, the warning will only apply for 60 seconds. Default value of <code>max_duration</code> are 900 seconds</p><p>This device do not support the <code>strobe</code> and <code>strobe_duty_cycle</code> functionality</p><h3 id="triggering-the-alarm-advanced" tabindex="-1"><a class="header-anchor" href="#triggering-the-alarm-advanced" aria-hidden="true">#</a> Triggering the alarm, Advanced</h3><p>This siren can be triggered manually by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with the payloads:</p><p>To start :</p><ul><li><code>{&quot;warning&quot;:{&quot;duration&quot;:60,&quot;level&quot;:&quot;low&quot;,&quot;mode&quot;:&quot;burglar&quot;,&quot;strobe&quot;:false,&quot;strobe_duty_cycle&quot;:0}}</code> Where:</li></ul><ul><li><code>duration</code>: the number of seconds the alarm will be on</li><li><code>level</code>: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>mode</code>: <code>stop</code>, <code>burglar</code>, <code>fire</code>, <code>emergency</code>, <code>police_panic</code>, <code>fire_panic</code>, <code>emergency_panic</code></li><li><code>strobe</code>: not supported</li><li><code>strobe_duty_cycle</code>: not supported</li></ul><p>To stop:</p><ul><li><code>{&quot;warning&quot;:{&quot;duration&quot;:60,&quot;level&quot;:&quot;low&quot;,&quot;mode&quot;:&quot;stop&quot;,&quot;strobe&quot;:false,&quot;strobe_duty_cycle&quot;:0}}</code></li></ul><h3 id="triggering-alarm-simple" tabindex="-1"><a class="header-anchor" href="#triggering-alarm-simple" aria-hidden="true">#</a> Triggering alarm, Simple</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: &quot;START&quot;}</code> and <code>{&quot;alarm&quot;: &quot;OFF&quot;}</code> Set <code>max_duration</code> from the Zigbee2MQTT UI or by publishing <code>{&quot;max_duration&quot;: NEW_VALUE}</code> This alarm are preset to highest volume and using the mode <code>police_panic</code></p><h3 id="squawk" tabindex="-1"><a class="header-anchor" href="#squawk" aria-hidden="true">#</a> Squawk</h3><p>Squawk are normally used to indicate activation and deactivation of an alarm system</p><p>Examples: <code>{&quot;squawk&quot;:{&quot;level&quot;:&quot;low&quot;,&quot;mode&quot;:&quot;system_is_sarmed&quot;,&quot;strobe&quot;:false}}</code><code>{&quot;squawk&quot;:{&quot;level&quot;:&quot;low&quot;,&quot;mode&quot;:&quot;system_is_disarmed&quot;,&quot;strobe&quot;:false}}</code></p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',19),i=(0,a.Uk)("How to use device type specific configuration"),r=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="test-binary" tabindex="-1"><a class="header-anchor" href="#test-binary" aria-hidden="true">#</a> Test (binary)</h3><p>Indicates whether the device is being tested. Value can be found in the published state on the <code>test</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> test is ON, if <code>false</code> OFF.</p><h3 id="warning-composite" tabindex="-1"><a class="header-anchor" href="#warning-composite" aria-hidden="true">#</a> Warning (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;warning&quot;: {&quot;mode&quot;: VALUE, &quot;level&quot;: VALUE, &quot;strobe_level&quot;: VALUE, &quot;strobe&quot;: VALUE, &quot;strobe_duty_cycle&quot;: VALUE, &quot;duration&quot;: VALUE}}</code></p><ul><li><code>mode</code> (enum): Mode of the warning (sound effect). Allowed values: <code>stop</code>, <code>burglar</code>, <code>fire</code>, <code>emergency</code>, <code>police_panic</code>, <code>fire_panic</code>, <code>emergency_panic</code></li><li><code>level</code> (enum): Sound level. Allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe_level</code> (enum): Intensity of the strobe. Allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe</code> (binary): Turn on/off the strobe (light) during warning. Allowed values: <code>true</code> or <code>false</code></li><li><code>strobe_duty_cycle</code> (numeric): Length of the flash cycle.</li><li><code>duration</code> (numeric): Duration in seconds of the alarm.</li></ul><h3 id="squawk-composite" tabindex="-1"><a class="header-anchor" href="#squawk-composite" aria-hidden="true">#</a> Squawk (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;squawk&quot;: {&quot;state&quot;: VALUE, &quot;level&quot;: VALUE, &quot;strobe&quot;: VALUE}}</code></p><ul><li><code>state</code> (enum): Set Squawk state. Allowed values: <code>system_is_armed</code>, <code>system_is_disarmed</code></li><li><code>level</code> (enum): Sound level. Allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe</code> (binary): Turn on/off the strobe (light) for Squawk. Allowed values: <code>true</code> or <code>false</code></li></ul><h3 id="max-duration-numeric" tabindex="-1"><a class="header-anchor" href="#max-duration-numeric" aria-hidden="true">#</a> Max_duration (numeric)</h3><p>Max duration of the siren. Value can be found in the published state on the <code>max_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;max_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>900</code>. The unit of this value is <code>s</code>.</p><h3 id="alarm-binary" tabindex="-1"><a class="header-anchor" href="#alarm-binary" aria-hidden="true">#</a> Alarm (binary)</h3><p>Manual start of the siren. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: NEW_VALUE}</code>. If value equals <code>START</code> alarm is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20),c={},l=(0,t(83744).Z)(c,[["render",function(e,o){const t=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[d,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[i])),_:1})])]),r],64)}]])},83744:(e,o)=>{o.Z=(e,o)=>{for(const[t,a]of o)e[t]=a;return e}}}]);