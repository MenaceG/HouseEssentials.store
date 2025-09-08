
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateFrontStore} from '@evershop/evershop/components/common';
      
import e74298ac14b6c149a30357db21c2c0b2c from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/all/SearchBox.js';
import e17db9ec4175ed491152d0f1994580c00 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/all/MiniCart.js';
import ea592a0e0f2e48de93f493e25fa493485 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Breadcrumb.js';
import e1db0f4eca10c3ed8fa7a39b7873f7e67 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Footer.js';
import e1ac3d40ee842d102061be512f54491aa from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/HeadTags.js';
import e4fbce136e8749fc74219e58699e82d56 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Layout.js';
import ed6c6d767fe84477292f9cef7474879a2 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Logo.js';
import ebd410ebe3746888f7e5417d888cb794a from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Notification.js';
import efcb7c7cd4adf3e7babb13c53d5f312b8 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/all/UserIcon.js';
import eb5305057976fc02752a40585e10ceaf5 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/paypal/pages/frontStore/paypalReturn/Error.js';
import collection_products from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/components/frontStore/widgets/CollectionProducts.js';
import text_block from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/components/frontStore/widgets/TextBlock.js';
import basic_menu from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/components/frontStore/widgets/BasicMenu.js';
Area.defaultProps.components = {
  'icon-wrapper': {
    e74298ac14b6c149a30357db21c2c0b2c: {
      id: 'e74298ac14b6c149a30357db21c2c0b2c',
      sortOrder: 5,
      component: { default: e74298ac14b6c149a30357db21c2c0b2c }
    },
    e17db9ec4175ed491152d0f1994580c00: {
      id: 'e17db9ec4175ed491152d0f1994580c00',
      sortOrder: 10,
      component: { default: e17db9ec4175ed491152d0f1994580c00 }
    },
    efcb7c7cd4adf3e7babb13c53d5f312b8: {
      id: 'efcb7c7cd4adf3e7babb13c53d5f312b8',
      sortOrder: 30,
      component: { default: efcb7c7cd4adf3e7babb13c53d5f312b8 }
    }
  },
  content: {
    ea592a0e0f2e48de93f493e25fa493485: {
      id: 'ea592a0e0f2e48de93f493e25fa493485',
      sortOrder: 0,
      component: { default: ea592a0e0f2e48de93f493e25fa493485 }
    },
    eb5305057976fc02752a40585e10ceaf5: {
      id: 'eb5305057976fc02752a40585e10ceaf5',
      sortOrder: 10,
      component: { default: eb5305057976fc02752a40585e10ceaf5 }
    }
  },
  footer: {
    e1db0f4eca10c3ed8fa7a39b7873f7e67: {
      id: 'e1db0f4eca10c3ed8fa7a39b7873f7e67',
      sortOrder: 10,
      component: { default: e1db0f4eca10c3ed8fa7a39b7873f7e67 }
    }
  },
  head: {
    e1ac3d40ee842d102061be512f54491aa: {
      id: 'e1ac3d40ee842d102061be512f54491aa',
      sortOrder: 5,
      component: { default: e1ac3d40ee842d102061be512f54491aa }
    }
  },
  body: {
    e4fbce136e8749fc74219e58699e82d56: {
      id: 'e4fbce136e8749fc74219e58699e82d56',
      sortOrder: 1,
      component: { default: e4fbce136e8749fc74219e58699e82d56 }
    },
    ebd410ebe3746888f7e5417d888cb794a: {
      id: 'ebd410ebe3746888f7e5417d888cb794a',
      sortOrder: 10,
      component: { default: ebd410ebe3746888f7e5417d888cb794a }
    }
  },
  header: {
    ed6c6d767fe84477292f9cef7474879a2: {
      id: 'ed6c6d767fe84477292f9cef7474879a2',
      sortOrder: 10,
      component: { default: ed6c6d767fe84477292f9cef7474879a2 }
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: { default: collection_products }
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: { default: text_block }
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: { default: basic_menu }
    }
  }
} 
ReactDOM.hydrate(
        React.createElement(HydrateFrontStore, null),
        document.getElementById('app')
      );