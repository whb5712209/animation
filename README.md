# transition

- [transition](#transition)
- [是什么](#%E6%98%AF%E4%BB%80%E4%B9%88)
- [如何用](#%E5%A6%82%E4%BD%95%E7%94%A8)
        - [触发时机](#%E8%A7%A6%E5%8F%91%E6%97%B6%E6%9C%BA)
        - [子属性](#%E5%AD%90%E5%B1%9E%E6%80%A7)
- [动机与目标](#%E5%8A%A8%E6%9C%BA%E4%B8%8E%E7%9B%AE%E6%A0%87)

# 是什么  
我们先看下定义  
[CSS transitions provide a way to control animation speed when changing CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)  
它是一个控制属性(css属性)发生变化时的运动效率的css属性
> 单纯的属性变化是在瞬间完成  
> 我们接下来要将animation与他有异曲同工之妙,但是transition需要触发调用,没办法自执行,而且在做组合动画的时候需要js 配合 非常麻烦

# 如何用  
### 触发时机
 过渡的触发时机:一定是需要过渡的属性发生了改变才会触发 
> 1) js改变style中是过度属性,或通过改变class样式从而达到改变过度属性的目的
> 2) css的伪类实现过度属性的变化

### 子属性
1. transition-delay : 开始作用之前需要等待的时间。<br>     
    
    transition-delay |  描述
    ------------ | -------------
    作用范围        | 所有element和伪元素
    值              | ms \| s 
    默认值          | 0s 
    缩写中可否省略  | 可以
    特殊值          | ``` initial:0s;inherit:继承父类。unset属性在此指代:initial(非继承属性) ```
    继承属性        | 否      ****

2. transition-duration :属性规定完成过渡效果需要花费的时间（以秒或毫秒计）<br>     
    transition-duration |  描述  
    ------------ | -------------
    作用范围        | 同上
    值              | ms \| s 
     缺省默认值          | 0s 
    缩写中可否省略  | 不可省略
    特殊值          | ``` initial:0s;inherit:继承父类。unset属性在此指代:initial(非继承属性)```
    继承属性        | 否    
3. transition-property:指定应用过渡属性的名称 <br>     
     transition-property |  描述
    ------------ | -------------
    作用范围        | 同上
    值              | [CSS_animated_properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)
    缺省默认值          | all 
    缩写中可否省略  | 不可省略
    特殊值          | ``` initial:all;inherit:继承父类;unset:在此指代:initial(非继承属性);all:变化属性中属于css过渡属性的值;none:没有变化  ```
    继承属性        | 否    
4. transition-timing-function:在所有过渡内容与过渡时间都固定的情况下,确定过渡如何进行 <br>     
     transition-property |  描述
    ------------ | -------------
    作用范围        | 同上
    值              | [timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/timing-function)
    缺省默认值      | ease 
    缩写中可否省略  | 可以省略
    特殊值          | ``` initial:ease;inherit:继承父类;unset:在此指代:initial(非继承属性);``` [其他详见MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function) 与[CSS3 Transition](https://www.w3cplus.com/content/css3-transition)
    继承属性        | 否  
> 缩写顺序:transition: <property:css属性不可缺省> <duration:过渡时间不可缺省> <timing-function:过渡过程> <delay:延迟过渡时间>;


# 动机与目标 
 




