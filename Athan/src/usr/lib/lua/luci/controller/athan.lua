-- stub lua controller for 19.07 backward compatibility

module("luci.controller.athan", package.seeall)

function index()
	entry({"admin", "athan"}, view("athan/athan"), _("Athan"))
end
