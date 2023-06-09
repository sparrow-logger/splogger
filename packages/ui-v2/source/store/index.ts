import { makeObservable, observable } from 'mobx'
import { createContext, useContext } from 'react';
import MonitorsStore from './Monitors';
import DashboardStore from './Dashboard';
import Ws from './ws'
import writeConfig from '../../config'
import Observe from './observe'
export type IPanelType = 'Dashboard' | 'Monitors' | 'Logs' | 'AppStore' | 'Tools' | 'SQL-Search' | 'Settings' | 'Canvas' | 'Crash' | 'Count' | 'Console';

class AppStore {
  constructor() {
    makeObservable(this);
  }

  Config = writeConfig;
  Monitors = new MonitorsStore(this);
  Dashboard = new DashboardStore(this);
  Ws = Ws.create(this.Config);
  Observe = new Observe(this);

  @observable panelType: IPanelType = 'Dashboard'
  @observable key = null;

  getCurrentPanelStore = () => {
    return this[this.panelType];
  };


  /** layout config */
  LayoutEnum: { key: IPanelType }[] = [
    {
      /** total */
      key: 'Dashboard',
      // component: this.Dashboard.getPanelDom()
    },
    {
      /** Monitors： */
      key: 'Monitors',
      // component: this.Monitors.getPanelDom()
    },
    {
      /** Log */
      key: 'Logs',
      // component: this.Monitors.getPanelDom()
    },
    {
      /** 大数据展示 */
      key: 'Canvas',
      // component: this.Monitors.getPanelDom()
    },
    {
      /** app Store */
      key: 'AppStore',
      // component: this.Monitors.getPanelDom()
    },
    {
      /** app Tools */
      key: 'Tools',
      // component: this.Monitors.getPanelDom()
    },
    {
      /** discover */
      key: 'SQL-Search',
    },
    {
      /**  */
      key: 'Settings',
    },
    {
      /** 报错收集 */
      key: 'Crash'
    },
    {
      /** 埋点统计 */
      key: 'Count'
    }
  ]
}

const appStore = new AppStore();

(window as any).app = appStore;

const AppStoreContext = createContext(appStore);

export { appStore, AppStore, AppStoreContext };