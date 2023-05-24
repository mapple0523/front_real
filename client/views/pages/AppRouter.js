import { createWebHistory, createRouter } from "vue-router";

import Main from '../pages/main/Main.vue';
import Dashboard from '../pages/main/Dashboard.vue';
import Dashboardlist from '../pages/main/Dashboardlist.vue';
import Tablelist from '../pages/main/Tablelist.vue';
import Tableinsert from '../pages/main/Tableinsert.vue';
import Datalist from '../pages/main/Datalist.vue';
import Filestandard from '../pages/main/Filestandard.vue';
import Visualization from '../pages/main/Visualization.vue';
import Barchart from '../pages/main/Barchart.vue';
import Doughnutchart from '../pages/main/Doughnutchart.vue';
import Linechart from '../pages/main/Linechart.vue';
import Piechart from '../pages/main/Piechart.vue';
import Polarareachart from '../pages/main/Polarareachart.vue';
import Radarchart from '../pages/main/Radarchart.vue';
import Bubblechart from '../pages/main/Bubblechart.vue';
import y_Barchart from '../pages/main/y_Barchart.vue';

const routes = [
    /* 메인화면 */
    { path: '/Main.page', name: 'Main', component: Main},
    { path: '/Dashboard.page', name: 'Dashboard', component: Dashboard},
    { path: '/Tablelist.page', name: 'Tablelist', component: Tablelist},
    { path: '/Tableinsert.page', name: 'Tableinsert', component: Tableinsert},
    { path: '/Datalist.page', name: 'Datalist', component: Datalist},
    { path: '/Dashboardlist.page', name: 'Dashboardlist', component: Dashboardlist},
    { path: '/Filestandard.page/${id}', name: 'Filestandard', component: Filestandard},
    { path: '/Visualization.page/${id}', name: 'Visualization', component: Visualization},
    { path: '/Barchart.page', name: 'Barchart', component: Barchart},
    { path: '/Doughnutchart.page', name: 'Doughnutchart', component: Doughnutchart},
    { path: '/Linechart.page', name: 'Linechart', component: Linechart},
    { path: '/Piechart.page', name: 'Piechart', component: Piechart},
    { path: '/Polarareachart.page', name: 'Polarareachart', component: Polarareachart},
    { path: '/Radarchart.page', name: 'Radarchart', component: Radarchart},
    { path: '/Bubblechart.page', name: 'Bubblechart', component: Bubblechart},
    { path: '/y_Barchart.page', name: 'y_Barchart', component: y_Barchart},
];

const AppRouter = createRouter({
    history: createWebHistory(),
    routes, 
});


// [
//     {name: "root", path:"/", component: Main},
    
// ]
export default AppRouter;