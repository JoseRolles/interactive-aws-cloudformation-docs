/*

	To try this:

	1) Visit this typical CloudFormation Documentation URL:

		https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html

	2) Open the Developers Tool JavaScript console.

	3) Paste the contents of this file.

	4) Hover over the YAML version of the "Syntax" section.

*/

jQuery("code.yaml.hljs > a").on("mouseenter", function(){window._ict_on_mouseenter(jQuery(this));})

jQuery("code.yaml.hljs > a + span + em").on("mouseenter", function(){window._ict_on_mouseenter(jQuery(this).prev("span").prev("a"));})

jQuery("code.yaml.hljs > a").on("mouseout", function(){window._ict_on_mouseout();})

jQuery("code.yaml.hljs > a + span + em").on("mouseout", function(){window._ict_on_mouseout();})

jQuery("code.yaml.hljs > a").each(function()
{
	var $ = jQuery;
	var $this = jQuery(this);
	var fragment = $this.attr("href").substr(1);
	var not_required = false;
	$('div.variablelist a[id="'+fragment+'"]').parent("dt").next("dd").find("p").each(function()
	{
		if (this.innerText != 'Required: No')
		{
			return;
		}
		not_required = true;
	});
	$this.prev("span").addClass(not_required ? "_ict_not_required" : "_ict_required");
});

jQuery(document.body).append(jQuery(
	'<style>' +
		'code.yaml.hljs:hover span.hljs-attr._ict_not_required + a:not(:hover),' +
		'code.yaml.hljs:hover span.hljs-attr._ict_not_required + a:not(:hover) + span + em {' +
		    'opacity: 0.3;' +
		    'filter: grayscale(1);' +
		'}' +
		'div._ict_small_desc_container {' +
		    'border: 1px solid rgba(0,0,0,0.2);' +
		    'padding: 5px 10px;' +
		    'white-space: initial;' +
		    'margin-top: 10px;' +
		    'transform: scale(0.8);' +
		    'transform-origin: left top;' +
		    'margin-bottom: -4%;' +
		    'margin-left: 15px;' +
		    'left: 50px;' +
		    'background-color: rgba(255,255,255,0.8);' +
		    'z-index: 1;' +
		'}' +
		'._ict_small_desc_container > p {' +
		    'margin: 5px 0;' +
		    'height: initial;' +
		'}' +
	'</style>'
));

window._ict_on_mouseenter = function($this)
{
	var $ = jQuery;
	window._ict_remove_all_small_desc()
	var fragment = $this.attr("href").substr(1);
	var desc = $('div.variablelist a[id="'+fragment+'"]').parent("dt").next("dd").html();
	var $small_desc = $('<div class="_ict_small_desc_container" />');
	$small_desc.html(desc);
	$this.next("span").next("em.replaceable").after($small_desc);
}

window._ict_remove_all_small_desc = function()
{
	var $ = jQuery;
	$('code.yaml.hljs div._ict_small_desc_container').remove();
}

window._ict_on_mouseout = function()
{
	window._ict_remove_all_small_desc();
}