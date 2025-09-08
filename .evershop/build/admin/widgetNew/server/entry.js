import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Area } from '@evershop/evershop/components/common';
import { renderHtml } from '@evershop/evershop/components/common';
import e832e8c943c97ef8925f68d84bc3bf3aa from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import e2f78b88c89030cbefaa38ab60ef6a2ef from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import eb0c8b9b6e3d8fae2c02c92fdf346b709 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import ebb8b07bcd5a097927ed2be86cfb4061f from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js';
import e9d2a08be81cf733f278451dd625ee2a0 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js';
import e61e0979a4ad7d4721532e71cdb7ab5df from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js';
import e759c1ff571d779331bc3cfd3ff923691 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Layout.js';
import e94b600e9de1ed1f344e1101579511104 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js';
import efa452f15ea3ba841226cbd6003cdbf59 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Meta.js';
import e5fa781794fe6ba12fa312982027266bf from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js';
import ebf575d72a8b7b9acd10ab2c42e4d1320 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js';
import e52aac47c1d8c5bbad564694c170e69a8 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js';
import ee727b9c5ba7b3c5bdc32ed247607b959 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js';
import ee50ed06b63db86a3a8013b8fde560f5f from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js';
import e4050b93d6e8d5e596bc73aa249cb81e0 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/widgetEdit+widgetNew/FormContent.js';
import e9eb0cf5fc150fdc4d24fd26195ebf12f from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/widgetEdit+widgetNew/General.js';
import e279acc58795cc5c9e9662f656fabd769 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/widgetEdit+widgetNew/PageHeading.js';
import e1199376e3867ac793fca89418ed998ff from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/widgetEdit+widgetNew/Setting.js';
import e045f6217ac0331aea77d98ae135f5ff0 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/widgetNew/WidgetNewForm.js';
import eaeea1b380e8814e88d2dc2f1b262bfb0 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import e5b73b8fb7b24e5b93e8dffcf1f13be96 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import e0cb47a6dd2ca855d9acbb4ab90887810 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import e9ee17da5cb9654e8600a6d19d1c9d685 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import e9377cc8762787eaca7fc6766ceb08e36 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import e6ee41aee121441f6d7e23d66f4ecd9e4 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import e099d9e10c74f03dc555e7c27c89c40f9 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import e41bd3a09c9ae2061047e92db69cc2a81 from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import collection_products from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/components/admin/widgets/CollectionProductsSetting.js';
import text_block from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/components/admin/widgets/TextBlockSetting.js';
import basic_menu from 'file:///C:/Users/Ayush/Desktop/houseEssentials/node_modules/@evershop/evershop/dist/components/admin/widgets/BasicMenuSetting.js';
export default renderHtml;
Area.defaultProps.components = {
  header: {
    e832e8c943c97ef8925f68d84bc3bf3aa: {
      id: 'e832e8c943c97ef8925f68d84bc3bf3aa',
      sortOrder: 50,
      component: { default: e832e8c943c97ef8925f68d84bc3bf3aa }
    },
    e94b600e9de1ed1f344e1101579511104: {
      id: 'e94b600e9de1ed1f344e1101579511104',
      sortOrder: 10,
      component: { default: e94b600e9de1ed1f344e1101579511104 }
    },
    ee727b9c5ba7b3c5bdc32ed247607b959: {
      id: 'ee727b9c5ba7b3c5bdc32ed247607b959',
      sortOrder: 20,
      component: { default: ee727b9c5ba7b3c5bdc32ed247607b959 }
    }
  },
  adminMenu: {
    e2f78b88c89030cbefaa38ab60ef6a2ef: {
      id: 'e2f78b88c89030cbefaa38ab60ef6a2ef',
      sortOrder: 20,
      component: { default: e2f78b88c89030cbefaa38ab60ef6a2ef }
    },
    e9d2a08be81cf733f278451dd625ee2a0: {
      id: 'e9d2a08be81cf733f278451dd625ee2a0',
      sortOrder: 60,
      component: { default: e9d2a08be81cf733f278451dd625ee2a0 }
    },
    e52aac47c1d8c5bbad564694c170e69a8: {
      id: 'e52aac47c1d8c5bbad564694c170e69a8',
      sortOrder: 10,
      component: { default: e52aac47c1d8c5bbad564694c170e69a8 }
    },
    eaeea1b380e8814e88d2dc2f1b262bfb0: {
      id: 'eaeea1b380e8814e88d2dc2f1b262bfb0',
      sortOrder: 40,
      component: { default: eaeea1b380e8814e88d2dc2f1b262bfb0 }
    },
    e5b73b8fb7b24e5b93e8dffcf1f13be96: {
      id: 'e5b73b8fb7b24e5b93e8dffcf1f13be96',
      sortOrder: 30,
      component: { default: e5b73b8fb7b24e5b93e8dffcf1f13be96 }
    },
    e0cb47a6dd2ca855d9acbb4ab90887810: {
      id: 'e0cb47a6dd2ca855d9acbb4ab90887810',
      sortOrder: 50,
      component: { default: e0cb47a6dd2ca855d9acbb4ab90887810 }
    },
    e6ee41aee121441f6d7e23d66f4ecd9e4: {
      id: 'e6ee41aee121441f6d7e23d66f4ecd9e4',
      sortOrder: 500,
      component: { default: e6ee41aee121441f6d7e23d66f4ecd9e4 }
    }
  },
  quickLinks: {
    eb0c8b9b6e3d8fae2c02c92fdf346b709: {
      id: 'eb0c8b9b6e3d8fae2c02c92fdf346b709',
      sortOrder: 20,
      component: { default: eb0c8b9b6e3d8fae2c02c92fdf346b709 }
    },
    e9ee17da5cb9654e8600a6d19d1c9d685: {
      id: 'e9ee17da5cb9654e8600a6d19d1c9d685',
      sortOrder: 30,
      component: { default: e9ee17da5cb9654e8600a6d19d1c9d685 }
    }
  },
  settingPageMenu: {
    ebb8b07bcd5a097927ed2be86cfb4061f: {
      id: 'ebb8b07bcd5a097927ed2be86cfb4061f',
      sortOrder: 15,
      component: { default: ebb8b07bcd5a097927ed2be86cfb4061f }
    },
    e9377cc8762787eaca7fc6766ceb08e36: {
      id: 'e9377cc8762787eaca7fc6766ceb08e36',
      sortOrder: 10,
      component: { default: e9377cc8762787eaca7fc6766ceb08e36 }
    },
    e099d9e10c74f03dc555e7c27c89c40f9: {
      id: 'e099d9e10c74f03dc555e7c27c89c40f9',
      sortOrder: 5,
      component: { default: e099d9e10c74f03dc555e7c27c89c40f9 }
    },
    e41bd3a09c9ae2061047e92db69cc2a81: {
      id: 'e41bd3a09c9ae2061047e92db69cc2a81',
      sortOrder: 20,
      component: { default: e41bd3a09c9ae2061047e92db69cc2a81 }
    }
  },
  footerLeft: {
    e61e0979a4ad7d4721532e71cdb7ab5df: {
      id: 'e61e0979a4ad7d4721532e71cdb7ab5df',
      sortOrder: 10,
      component: { default: e61e0979a4ad7d4721532e71cdb7ab5df }
    },
    ee50ed06b63db86a3a8013b8fde560f5f: {
      id: 'ee50ed06b63db86a3a8013b8fde560f5f',
      sortOrder: 20,
      component: { default: ee50ed06b63db86a3a8013b8fde560f5f }
    }
  },
  body: {
    e759c1ff571d779331bc3cfd3ff923691: {
      id: 'e759c1ff571d779331bc3cfd3ff923691',
      sortOrder: 10,
      component: { default: e759c1ff571d779331bc3cfd3ff923691 }
    },
    ebf575d72a8b7b9acd10ab2c42e4d1320: {
      id: 'ebf575d72a8b7b9acd10ab2c42e4d1320',
      sortOrder: 10,
      component: { default: ebf575d72a8b7b9acd10ab2c42e4d1320 }
    }
  },
  head: {
    efa452f15ea3ba841226cbd6003cdbf59: {
      id: 'efa452f15ea3ba841226cbd6003cdbf59',
      sortOrder: 5,
      component: { default: efa452f15ea3ba841226cbd6003cdbf59 }
    }
  },
  adminNavigation: {
    e5fa781794fe6ba12fa312982027266bf: {
      id: 'e5fa781794fe6ba12fa312982027266bf',
      sortOrder: 10,
      component: { default: e5fa781794fe6ba12fa312982027266bf }
    }
  },
  widgetForm: {
    e4050b93d6e8d5e596bc73aa249cb81e0: {
      id: 'e4050b93d6e8d5e596bc73aa249cb81e0',
      sortOrder: 10,
      component: { default: e4050b93d6e8d5e596bc73aa249cb81e0 }
    }
  },
  rightSide: {
    e9eb0cf5fc150fdc4d24fd26195ebf12f: {
      id: 'e9eb0cf5fc150fdc4d24fd26195ebf12f',
      sortOrder: 15,
      component: { default: e9eb0cf5fc150fdc4d24fd26195ebf12f }
    }
  },
  content: {
    e279acc58795cc5c9e9662f656fabd769: {
      id: 'e279acc58795cc5c9e9662f656fabd769',
      sortOrder: 5,
      component: { default: e279acc58795cc5c9e9662f656fabd769 }
    },
    e045f6217ac0331aea77d98ae135f5ff0: {
      id: 'e045f6217ac0331aea77d98ae135f5ff0',
      sortOrder: 10,
      component: { default: e045f6217ac0331aea77d98ae135f5ff0 }
    }
  },
  leftSide: {
    e1199376e3867ac793fca89418ed998ff: {
      id: 'e1199376e3867ac793fca89418ed998ff',
      sortOrder: 30,
      component: { default: e1199376e3867ac793fca89418ed998ff }
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