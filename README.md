Important:

the schematic has design issue in pcb antenna not working require external antenna.


LOG 



board pcm5102a not working due to wrong capacitor value (2.2nf) it should be (2.2uf)





## ignore 
change /rootwifi-fallback.sh 
    change echo `uci set wireless.@wifi-iface[0].disabled=0` to 1 
    cange echo `uci set wireless.@wifi-iface[0].disabled=1` to 0



03/06/2020 
update to last version "git pull"
    get problems:
        jffs2: Erase at 0x00378000 failed immediately: errno -22 https://bugs.openwrt.org/index.php?do=details&task_id=2837

    fixed by revert commit 15a0701cdde8 use "git revert 15a0701cdde8" 

no sound or no support for m4a or aac:
    problem go away after remove package "libffmpeg-audio-dec"
    and install "libffmpeg-full"



04/9/2020

A new frontend to athan setting
add file \usr\lib\lua\luci\controller\athan_new.lua
add file \www\luci-static\resources\view\athannew\athannew.js



04/10/2020

add "/usr/sbin/athan/sound/athan.mp3": [ "write" ], to 		"write": {
                                                    			"cgi-io": [ "upload" ],
                                                    			    "file": { 
to allow upload athan.mp3 file


add "/usr/sbin/athan.sh": [ "exec" ], to "write": {
                                 			"cgi-io": [ "upload" ],
                                			    "file": { 
 

 
 add "/usr/sbin/athan.sh": [ "exec" ], to 
	"luci-access": {
		"description": "Grant access to basic LuCI procedures",
		"read": {
			"cgi-io": [ "backup", "download", "exec" ],
			"file": {
TO upbate athan times in crontab jop


//// not work properly Error: XHR request timed out
add "/usr/bin/madplay /usr/sbin/athan/sound/athan.mp3": [ "exec" ], to "write": {
                                                    			            "cgi-io": [ "upload" ],
                                                    			                "file": { 
to test athan sound

add "/usr/bin/madplay /usr/sbin/athan/sound/athan.mp3": [ "exec" ], to 
	"luci-access": {
		"description": "Grant access to basic LuCI procedures",
		"read": {
			"cgi-io": [ "backup", "download", "exec" ],
			"file": {
                
to test athan sound
////



04/11/2020


1: fix permission of athan.js file.
2: fix error 404 by remove 'require view'; & 'require dom';  from athan.js
    and add return L.view.extend({ on line 9
     



TODO 
Note: check the permission and endline code
1: merge python3 full package into soruce
2: update luci to lastest version
3: add the new files to build source and build the source 
