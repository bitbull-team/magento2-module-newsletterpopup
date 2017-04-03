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
            'popup_delay' => $this->_getPopupDelay(),
            'popup_title' => $this->_getPopupTitle()
        ];
    }

    /**
     * Newsletter Popup Text.
     *
     * @return string
     */
    public function getPopupText()
    {
        return $this->configHelper->getConfigParam(NewsletterPopupConfig::POPUP_TEXT);
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

    /**
     * Newsletter Popup Title.
     *
     * @return string
     */
    protected function _getPopupTitle()
    {
        return (string) $this->escapeHtml($this->configHelper->getConfigParam(NewsletterPopupConfig::POPUP_TITLE));
    }
}