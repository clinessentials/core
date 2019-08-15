<?php
use Magento\Framework\App\Config\ScopeConfigInterface as IConfig;
use Magento\Framework\App\ObjectManager as OM;
use Magento\Framework\UrlInterface as IUrl;
use Magento\Framework\View\LayoutInterface as ILayout;
use Magento\Store\Model\ScopeInterface as IScope;
/**
 * 2019-08-15
 * "Update the PDF invoice logo": https://github.com/clinessentials/core/issues/36
 * @used-by app/design/frontend/Magento/theme-frontend-luma-child/Magento_Theme/templates/html/header/logo.phtml
 * @return bool
 */
function clin_is_print() {
	$om = OM::getInstance(); /** @var OM $om */
	$l = $om->get(ILayout::class); /** @var ILayout $l */
	return in_array('print', $l->getUpdate()->getHandles());
}
/**
 * 2019-08-15
 * "Update the PDF invoice logo": https://github.com/clinessentials/core/issues/36
 * @used-by app/design/frontend/Magento/theme-frontend-luma-child/Magento_Theme/templates/html/header/logo.phtml
 * @return string
 */
function clin_print_logo_url() {
	$om = OM::getInstance(); /** @var OM $om */
	$cfg = $om->get(IConfig::class); /** @var IConfig $cfg */
	$url = $om->get(IUrl::class); /** @var IUrl $url */
	return
		$url->getBaseUrl(['_type' => IUrl::URL_TYPE_MEDIA])
		. 'sales/store/logo/'
		. $cfg->getValue('sales/identity/logo', IScope::SCOPE_STORE)
	;
}