<?php
namespace ClinEssentials\Core\Observer;
use Magento\Framework\Event\Observer as Ob;
use Magento\Framework\Event\ObserverInterface;
use Magento\Quote\Model\Quote as Q;
/**
 * 2019-08-16
 * "Clear the saved cart contents when the customer is signed in":
 * https://github.com/clinessentials/core/issues/42
 * https://magento.stackexchange.com/a/19868
 * @used-by \Magento\Quote\Model\Quote::merge()
 */
final class SalesQuoteMergeBefore implements ObserverInterface {
	/**
	 * 2019-08-16
	 * @override
	 * @see ObserverInterface::execute()
	 * @used-by \Magento\Framework\Event\Invoker\InvokerDefault::_callObserverMethod()
	 * @param Ob $o
	 */
	function execute(Ob $o) {
		$q = $o['quote']; /** @var Q $q */
		$q->removeAllItems();
	}
}