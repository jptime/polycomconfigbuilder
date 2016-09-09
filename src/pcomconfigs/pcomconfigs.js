var Configs = [
	{
		"name": "Trio Lync SIP TS",
		"params": ['log.level.change.sip="0"','log.level.change.sipp="0"','log.level.change.sipt="0"','log.level.change.so="2"','log.level.change.pps="1"','log.level.change.app1="4"','log.level.change.ice="4"','log.level.change.tickt="4"','log.level.change.srtp="4"','log.level.change.tls="4"','log.level.change.moh="4"','log.level.change.em="4"','log.level.change.pres="4"','log.level.change.btoe="4"','log.level.change.dhcpc="4"','log.level.change.lldp="4"','log.level.change.key="4"','log.level.change.cert="4"','log.level.change.curl="4"','log.level.change.dns="4"','log.level.change.loc="4"','log.level.change.slog="3"','log.level.change.sspsc="4"','log.level.change.ssps="4"','log.level.change.net="4"','log.level.change.cfg="6"','log.level.change.cdp="4"','log.level.change.pmt="4"','log.level.change.ftp="4"','log.level.change.ares="4"','log.level.change.cxss="4"','log.level.change.httpd="4"','log.level.change.rdisk="4"','log.level.change.copy="4"','log.level.change.res="4"','log.level.change.log="4"','log.level.change.rtos="4"','log.level.change.mb="4"','log.level.change.ib="4"','log.level.change.ttrs="4"','log.level.change.usb="4"','log.level.change.clink="4"','log.level.change.pnetm="4"','log.level.change.peer="4"','log.level.change.efk="4"','log.level.change.ldap="4"','log.level.change.cmr="4"','log.level.change.cmp="4"','log.level.change.usbio="4"','log.level.change.ptt="4"','log.level.change.pwrsv="4"','log.level.change.utilm="4"','log.level.change.afe="4"','log.render.level="0"','log.render.type="2"','log.render.realtime="1"','log.render.stdout="1"','log.render.file="1"','log.render.file.size="10240"','log.render.file.upload.append="1"','log.render.file.upload.append.sizeLimit="40000"','log.render.file.upload.append.limitMode="delete"'],
		"desc": "SIP Logging for Lync on Trios"
	},
	{
		"name": "VVX Lync SIP TS",
		"params": ['log.level.change.sip="0"','log.level.change.sipp="0"','log.level.change.sipt="0"','log.level.change.so="2"','log.level.change.pps="1"','log.level.change.app1="4"','log.level.change.ice="4"','log.level.change.tickt="4"','log.level.change.srtp="4"','log.level.change.tls="4"','log.level.change.moh="4"','log.level.change.em="4"','log.level.change.pres="4"','log.level.change.btoe="4"','log.level.change.dhcpc="4"','log.level.change.lldp="4"','log.level.change.key="4"','log.level.change.cert="4"','log.level.change.curl="4"','log.level.change.dns="4"','log.level.change.loc="4"','log.level.change.slog="3"','log.level.change.sspsc="4"','log.level.change.ssps="4"','log.level.change.net="4"','log.level.change.cfg="6"','log.level.change.cdp="4"','log.level.change.pmt="4"','log.level.change.ftp="4"','log.level.change.ares="4"','log.level.change.cxss="4"','log.level.change.httpd="4"','log.level.change.rdisk="4"','log.level.change.copy="4"','log.level.change.res="4"','log.level.change.log="4"','log.level.change.rtos="4"','log.level.change.mb="4"','log.level.change.ib="4"','log.level.change.ttrs="4"','log.level.change.usb="4"','log.level.change.clink="4"','log.level.change.pnetm="4"','log.level.change.peer="4"','log.level.change.efk="4"','log.level.change.ldap="4"','log.level.change.cmr="4"','log.level.change.cmp="4"','log.level.change.usbio="4"','log.level.change.ptt="4"','log.level.change.pwrsv="4"','log.level.change.utilm="4"','log.level.change.afe="4"','log.render.level="0"','log.render.type="2"','log.render.realtime="1"','log.render.stdout="1"','log.render.file="1"','log.render.file.size="180"','log.render.file.upload.append="1"','log.render.file.upload.append.sizeLimit="40000"','log.render.file.upload.append.limitMode="delete"'],
		"desc": "SIP Logging for Lync on VVX Phones"
	},
    {
        "name": "Trio Exchange TS",
        "params": ['log.level.change.sip="0"', 'log.level.change.tickt="0"', 'log.level.change.pgui="0"', 'log.render.level="0"', 'log.render.file.size="10240"'],
        "desc": "Troubleshooting for Exchange Issues O365"
    }, {
        "name": "Disable Forward Btn",
        "params": ['feature.enhancedFeatureKeys.enabled="1"', 'softkey.feature.forward="0"'],
        "desc": "Disable that forward button on that phone. **Note it won't work on lync/SFB if the user profile has forwarding setup "
    }, {
        "name": "Volume Persist",
        "params": ['voice.volume.persist.handset="1"', 'voice.volume.persist.headset="1"', 'voice.volume.persist.handsfree="1"', 'voice.volume.persist.usb.handsfree="1"', 'voice.volume.persist.usbHeadset="1"'],
        "desc": "Volume on phone persists after each call (not default)"
    }, {
        "name": "DTMF 101",
        "params": 'tone.dtmf.rfc2833Payload="101"',
        "desc": "For those phones that have issues sending DTMF to conf bridges"
    },
    {
    	"name": "MWI LED Disable",
    	"params": 'msg.mwi.1.led="0"',
    	"desc": "Disable that there LED"
    },
    {
    	"name": "MWI Beep Disable",
    	"params": ['se.pat.misc.1.inst.1.type="chord"', 'se.pat.misc.1.inst.2.type="chord"', 'se.pat.misc.1.inst.3.type="chord"', 'se.pat.misc.1.inst.1.value="cs4"', 'se.pat.misc.1.inst.2.value="cs6"', 'se.pat.misc.1.inst.3.value="cs6"', 'se.pat.misc.messageWaiting.inst.1.value="0"', 'se.pat.misc.messageWaiting.inst.2.value="0"', 'se.pat.misc.messageWaiting.inst.3.value="0"'],
    	"desc": "Disable that there Beep"
    },
    {
    	"name": "MWI Stutter Fix",
    	"params": ['se.stutterOnVoiceMail="0"'],
    	"desc": "Disable Stutter on Dialtone when VMs are waiting"
    },
    {
    	"name": "Flex Line Key",
    	"params": ['lineKey.reassignment.enabled="1"','up.numOfDisplayColumns="2"','lineKey.1.category="line"','lineKey.1.index="1"','lineKey.2.category="unassigned"','lineKey.2.index="2"','lineKey.3.category="unassigned"','lineKey.3.index="3"','lineKey.4.category="unassigned"','lineKey.4.index="4"','lineKey.5.category="blf"','lineKey.5.index="0"','lineKey.6.category="unassigned"','lineKey.6.index="6"','lineKey.7.category="unassigned"','lineKey.7.index="7"','lineKey.8.category="unassigned"','lineKey.8.index="8"','lineKey.9.category="unassigned"','lineKey.9.index="9"','lineKey.10.category="unassigned"','lineKey.10.index="10"','lineKey.11.category="unassigned"','lineKey.11.index="0"','lineKey.12.category="unassigned"','lineKey.12.index="0"','lineKey.13.category="blf"','lineKey.13.index="0"','lineKey.14.category="presence"','lineKey.14.index="0"'],
    	"desc": "Basic Flex Line Key Configuration"
    }
]



export
default Configs