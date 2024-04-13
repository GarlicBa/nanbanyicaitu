import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
 
  {
    name:'Draw2',
    path: '/Draw2',
    component: () => import('../views/Art/Draw2.vue')
  },
  {
    name:'Write2',
    path: '/Write2',
    component: () => import('../views/Art/Write2.vue')
  },
 
  
  
  {
    name:'Eat',
    path: '/Eat',
    component: () => import('../views/Eat/Main.vue'),
    children:[
      {
        name:'Page1',
        path:'/',
        component: () => import('../views/Eat/Page1.vue')
      },
      {
        name:'Page2',
        path:'/Page2',
        component: () => import('../views/Eat/Page2.vue')
      },
      {
        name:'Page3',
        path:'/Page3',
        component: () => import('../views/Eat/Page3.vue'),
        children:[
          {
            name:'Page4',
            path:'/',
            component: () => import('../views/Eat/Page4.vue')
          },
          {
            name:'Page5',
            path:'/Page5',
            component: () => import('../views/Eat/Page5.vue'),
            children:[
            {
              name:'Page6',
              path:'/',
              component: () => import('../views/Eat/Page6.vue')
            },
            {
              name:'Page7',
              path:'/Page7',
              component: () => import('../views/Eat/Page7.vue')
            },
            {
              name:'Page8',
              path:'/Page8',
              component: () => import('../views/Eat/Page8.vue')
            },
            {
              name:'Page9',
              path:'/Page9',
              component: () => import('../views/Eat/Page9.vue')
            },
            {
              name:'Page10',
              path:'/Page10',
              component: () => import('../views/Eat/Page10.vue')
            },
            {
              name:'Page11',
              path:'/Page11',
              component: () => import('../views/Eat/Page11.vue')
            },


            ]
          }
        ]
      }
    ]
  },
  {
    name:'Music2',
    path: '/Music2',
    component: () => import('../views/Art/Music2.vue')
  },
  {
    name:'Literal2',
    path: '/Literal2',
    component: () => import('../views/Art/Literal2.vue')
  },
  {
    name:'artmain',
    path: '/artmain',
    component: () => import('../views/Art/Main.vue'),
    children:[
      {
        name:'Music',
        path:'/',
        component: () => import('../views/Art/Music.vue')
      },
      {
        name:'Draw',
        path:'/Draw',
        component: () => import('../views/Art/Draw.vue')
      },
      {
        name:'Literal',
        path:'/Literal',
        component: () => import('../views/Art/Literal.vue')
      },
      {
        name:'Write',
        path:'/Write',
        component: () => import('../views/Art/Write.vue')
      },
    ]
  },
  {
    name:"home",
    path: '/home',
    component: () => import('../views/HomePage.vue')
  },

  {
    name:'build1',
    path: '/build1',
    component: () => import('../views/Build/Build1.vue'),
   
  },
  {
    name:'build3',
    path: '/build3',
    component: () => import('../views/Build/Build3.vue'),
     props: true,
  },
  {
    name:'Build2huipai',
    path: '/Build2huipai',
    component: () => import('../views/Build/Build2huipai.vue'),
     children:[
       {
         name:'pic1',
         path:'/',
         component: () => import('../views/pic/Pic1.vue')
       },
       {
        name:'pic2',
        path:'/pic2',
        component: () => import('../views/pic/Pic2.vue')
      },
      {
        name:'pic3',
        path:'/pic3',
        component: () => import('../views/pic/Pic3.vue')
      },
      {
        name:'pic4',
        path:'/pic4',
        component: () => import('../views/pic/Pic4.vue')
      }
     ]
  },
  {
    name:'Build2sihe',
    path: '/Build2sihe',
    component: () => import('../views/Build/Build2sihe.vue'),
    children:[
      {
        name:'pic5',
        path:'/',
        component: () => import('../views/pic/Pic5.vue')
      },
      {
       name:'pic6',
       path:'/pic6',
       component: () => import('../views/pic/Pic6.vue')
     },
    
    {
      name:'pic9',
      path:'/pic9',
      component: () => import('../views/pic/Pic9.vue')
    },
    {
      name:'pic10',
      path:'/pic10',
      component: () => import('../views/pic/Pic10.vue')
    },
  
    
    ]
  },

  {
    name:'pageT',
    path:'/',
    component: () => import('../views/PageT.vue'),
    children:[
      {
        name:"Main",
        path:"/",
        component: () => import('../views/PageT/Main.vue')
      },
      {
        name:'subBuilding',
        path:'subBuilding',
        component: () => import('../views/PageT/subBuilding.vue')
      },
      {
        name:'subZhou',
        path:'subZhou',
        component: () => import('../views/PageT/subZhou.vue')
      },
      {
        name:'subArt',
        path:'subArt',
        component: () => import('../views/PageT/subArt.vue')
      },
      {
        name:'subFood',
        path:'subFood',
        component: () => import('../views/PageT/subFood.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
