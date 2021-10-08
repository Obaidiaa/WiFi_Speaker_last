'use strict';
'require form';
'require rpc';
'require fs';
'require ui';
'require uci';


return L.view.extend({

	
	handleRestore: function(ev) {
		return ui.uploadFile('/usr/sbin/athan/sound/athan.mp3', ev.target)
			.then(L.bind(function(btn, res) {
				btn.firstChild.data = _('Uploading Athan file');
				ui.addNotification(null, E('p', 'Athan file uploaded'))
				return null;
			}, this, ev.target))
			.catch(function(e) { ui.addNotification(null, E('p', e.message)) })
			.finally(L.bind(function(btn, input) {
				btn.firstChild.data = _('Upload Athan file');
			}, this, ev.target));
	},
	// PlayAthan: function(ev) {
	// 	 return fs.exec('madplay', [ '/usr/sbin/athan/sound/athan.mp3' ]);
	// },
	// StopAthan: function(ev) {
	// 	return fs.exec('kill ', [ '', '`pidof madplay`' ]);
	// },
	render: function(rpc_replies) {
		var  m, s, o, ss,oo,athan_enabled;

		m = new form.Map('athan','Athan Setting');

		s = m.section(form.TypedSection, 'Athan', _('Upload Athan file'));
		s.addremove = false
		s.anonymous = true
		o = s.option(form.Button, 'upload', _('Upload'), _('Upload Athan file that will play with each athan. The file should be mp3'));
		o.inputstyle = 'action important';
		o.inputtitle = _('Upload Athan file');
		o.onclick = L.bind(this.handleRestore, this);

		// o = s.option(form.Button, 'playathan', _('Play'), _('Test athan sound'));
		// o.inputstyle = 'action important';
		// o.inputtitle = _('Test Athan Sound');
		// o.onclick = L.bind(this.PlayAthan,this);

		// o = s.option(form.Button, 'stopathan', _('stop'), _('Stop athan test'));
		// o.inputstyle = 'action important';
		// o.inputtitle = _('Stop Athan Test');
		// o.onclick = L.bind(this.StopAthan,this);

		s = m.section(form.TypedSection, 'Athan', _('Sound and Method'));
		s.addremove = false
		s.anonymous = true

	

		o=s.option(form.Flag, "enabled", "Enabled","enable Athan")
		o.rmempty = false;


		o=s.option(form.ListValue, "method", "Method", "Select the calculation method")
		o.value('Jafari', 'Shia Ithna Ashari (Ja`fari)')
		o.value('MWL', ' Muslim World League ')
		o.value('ISNA', ' Islamic Society of North America ')
		o.value('Egypt', ' Egyptian General Authority of Survey ')
		o.value('Makkah', ' Umm al-Qura University, Makkah ')
		o.value('Karachi', ' University of Islamic Sciences, Karachi ')
		o.value('Tehran', ' Institute of Geophysics, University of Tehran ')
		
		
		o = s.option(form.Value, "Latitude", "Latitude","Your current Latitude")
		o.rmempty = false
		o = s.option(form.Value, "Longitude", "Longitude","Your current Longitude")
		o.rmempty = false


		s = m.section(form.TypedSection, "Pray_select", "Pray Select","Choose which Pray Athan will play")
		s.addremove = false
		s.anonymous = true

		o=s.option(form.Flag, "fajr", "Fajr")
		o.rmempty = false

		o=s.option(form.Flag, "dhuhr", "Dhuhr")
		o.rmempty = false

		o=s.option(form.Flag, "asr", "Asr")
		o.rmempty = false

		o=s.option(form.Flag, "maghrib", "Maghrib")
		o.rmempty = false

		o=s.option(form.Flag, "isha", "Isha")
		o.rmempty = false

		return m.render();
		fs.exec('/usr/sbin/athan.sh');
		fs.exec('/usr/sbin/crond reload');
		fs.exec('/usr/sbin/crond restart');
	},
	handleReset: null
});
