<?php

namespace Bitbull\NewsletterPopup\Block;

use Bitbull\NewsletterPopup\Helper\Config as NewsletterPopupConfig;
use Magento\Framework\View\Element\Template\Context;

class NewsletterPopup extends \Magento\Framework\View\Element\Template
{
    /**
     * @var Context
     */
    protected $context;
    /**
     * @var NewsletterPopupConfig
     */
    protected $configHelper;

    /**
     * @param Context         $context
     * @param NewsletterPopupConfig $configHelper
     */
    public function __construct(
        Context $context,
        NewsletterPopupConfig $configHelper
    ) {
        parent::__construct($context);
        $this->configHelper = $configHelper;
    }

    /**
     * Returns Newsletter Popup config
     *
     * @return array
     */
    public function getConfig()
    {
        return [
            'popup_delay' => $this->_getPopupDelay()
        ];
    }

    /**
     * Newsletter Popup Delay.
     *
     * @return string
     */
    protected function _getPopupDelay()
    {
        return (string) $this->escapeHtml($this->configHelper->getConfigParam(NewsletterPopupConfig::POPUP_DELAY));
    }

}