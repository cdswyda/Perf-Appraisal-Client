import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Score from '@/components/Score';
import Score2 from '@/components/Score2';
import Cfg from '@/views/ScoreCfg';
import Login from '@/views/Login';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/testScore',
      name: 'score',
      component: Score,
    },
    {
      path: '/testCfg',
      name: 'Cfg',
      component: Cfg,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    }, {
      path: '/score',
      name: 'score',
      component: Score,
    },{
      path: '/score2',
      name: 'score2',
      component: Score2,
    },
  ],
});
