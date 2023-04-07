// 这里需要动态import bootstrap.js 是因为我们需要等远程资源和shared资源加载好之后才能异步加载业务代码
// 如果bootstrap的逻辑不是动态import，那么我们在使用 import React from 'react'或者 import 远程组件 from 'remote'的时候，因为远程资源/shared资源未加载完毕，就会导致找不到文件
import('./bootstrap')