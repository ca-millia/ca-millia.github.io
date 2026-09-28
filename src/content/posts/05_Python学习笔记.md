---
slug: "05_Python学习笔记"
title: 'Python 学习笔记'
pubDate: 2026-01-27
tags: ["学习笔记"]
---

### 资料集锦
<a href="https://liaoxuefeng.com/books/python/introduction/index.html">廖雪峰的官方网站</a>

### 学习笔记
#### 命令行模式
1. 利用cd命令（不区分大小写）来切换目录

cd即change directory的缩写，后可接驱动器符号（D:）、完整路径和相对路径，本部分主要参考<a href="https://blog.csdn.net/zdy219727/article/details/98605287">Windows命令行cmd之cd命令用法</a>中的总结。
- `cd \ `回到根目录
- `cd . `当前目录
- `cd ..`回到上一层目录
- `cd ..\.. `返回多级 注意空格
- `d: `进入该目录所在盘区
- `cd \?`显示cd帮助及用法
- 进入任意目录有两种方法，一是先进入盘区再输入相对路径，二是`cd \d`后接绝对路径

2. 运行py文件

注意在正确的目录下使用`python code.py`
#### python交互模式
1. `exit()`退出
2. 输入输出
    - `print(' '," ")`单引号和双引号都可以，**注意不能使用中文字符** ，输出多个用逗号隔开，想把句子连起来用`+`
    - `name=input('please enter your name: ')`有提示的输入，返回类型为str，可能需要用`a=int()`来转换

3. 杂七杂八

    - `# 注释`
    - 语句放在同一行用`；`分割,不同行不需要用`；`——在Python中每一行都是一个语句。当语句以冒号`:`结尾时，缩进的语句视为代码块。例如
    ```
    if a >= 0: 
        print(a)
    else:
        print(-a)
    ```
    - 4个空格的缩进 在文本编辑器中，可以设置把Tab自动转换为4个空格（默认）
    - 大小写敏感
    - 推荐在>=前后加空格
    - `int()len()` 是一个独立的内置函数，而不是某种类型的方法，不能用作`.len()`
    - range()函数可以生成整数序列，再用list转换，例如`list(range(5))`
        - `range(start, stop[, step])`  例如`range(5,-1,-1)`输出从5到-1（不含），倒着走
        - 当start+step 不再满足与 stop 的比较时停止，正 step，要求值 < stop 才继续；对于负 step，要求值 > stop 才继续
    - `''.join(...)`将上述生成的字符序列拼接成一个完整的字符串。
4. 报错
    - syntaxError 语法错误
        - invalid character无法识别的字符

5. 小技巧
- 创建py文件可输入：New-Item -Path 'Hello,word' -ItemType 'file'（注意空格）
- 可以一边在文本编辑器里写代码，一边开一个交互式命令窗口，在写代码的过程中，把部分代码粘到命令行去验证
- `a, b = b, a + b`不需要写出临时变量，也不会发生b=2b的情况
#### 数据类型和变量
1. 整数 
- 十六进制用0x前缀和0-9，a-f表示 
- 可以在数字中间用_分隔，便于肉眼读数
2. 浮点数，即小数，表示为1.23e5
3. 字符串
- 如果'本身也是一个字符，那就可以用""括起来
- 字符串内部既包含'又包含",可以用转义字符\来标识
    - \n换行 \t制表符 \\转义自己
    - print(r' ')前面加r表示内部字符串默认不转义
    - 使用''' '''可以换行输入,注意...是提示符，不是代码部分
    ```
    >>> print('''line1
    ... line2
    ... line3''') 
    ```
4. 布尔值 
- True/False注意大小写
- and, or, not 
5. 空值 None
6. 变量 Python是动态语言，变量本身类型不固定不用特别指定
7. 常量 通常大写，但可以改变，例如PI=3.14159265359
8. 运算
- / 结果是浮点数
- // 结果是整数
- % 取余
**注意 转义符号是\而不是/**
#### 字符串和编码
1. 介绍

    ASCII+GB2312+...->Unicode，常用UCS16，也可以转化成“可变长编码”的UTF-8。计算机内存/服务器，用Unicode；需要保存到硬盘或者需要传输时，例如.txt和浏览器网页，使用UTF-8
    - python3字符串str就是用unicode编码的，而以字节为单位的bytes类型的数据表示为x = b'ABC'
        - `.encode('utf-8')`编码 `.decode('ascii')`解码
        - len()输出长度
            - len('中文')= 2有两个字符 len(b'\xe4\xb8\xad\xe6\x96\x87')=6有六个字节 （一个中文字符用三个字节存储）
        - `ord()`获取字符str的整数表示即编码byte，`chr()`把编码转换成对应的字符
2. 在文件开头
    - `#!/usr/bin/env python3`告诉Linux/OS X系统，这是一个Python可执行程序，Windows系统会忽略这个注释
    - `# -*- coding: utf-8 -*-`告诉Python解释器，按照UTF-8编码读取源代码，否则，你在源代码中写的中文输出可能会有乱码。
3. 格式化 %

    `%s`表示用字符串替换，`%d`表示用整数替换，`%f` 表示浮点数替换，`%x`表示十六进制整数替换，有几个%?占位符，后面就跟几个变量或者值，顺序要对应好。如果只有一个%?，括号可以省略。
    ```
    'Hi, %s, you have $%d.' % ('Michael', 1000000)
    ```
    - %[标志][宽度][.精度]类型码
        - `print('%2d-%02d'%(3,1))` 中的2表示宽度,即3前会出现一个空格
        - `print('%.2f' % 3.1415926)` 输出3.14
    - %s 表示"字符串占位符"，但它会自动将任何类型转换为字符串，即使后一个%后面跟的不是字符串
    - 转义%%

    - `'Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125) `字符串内的占位符是**数组**形式
    - `print(f'The area of a circle with radius {r} is {s:.2f}')`以f开头的字符串，**可以读之前的变量**，注意后两种使用了冒号

#### list & tuple
1. list
    
    基本形式`list=[]`，`len()`获得个数，`list[0]`访问第一个，`list[-1]`访问最后一个，`.append()`追加到末尾，`.insert(1,'Jack')`插入到索引号为1的位置，`.pop()`删除末尾的元素，`.pop(i)`删除指定位置，替换可以直接赋值
2. tuple

    基本形式`tuple=()`，区别在于不可修改，但是内部变量可变
    - 注意定义一个元素的tuple需要把，写上`t=(1,)`

#### 条件判断
注意缩进和冒号，`else:`中没有别的判断条件了
```
age = 3
if age >= 18:
    print('adult')
elif age >= 6:
    print('teenager')
else:
    print('kid')
```
#### 模式匹配
```
age = 15

match age:
    case x if x < 10:#当age<10时成立，赋值到x
        print(f'< 10 years old: {x}')
    case 10:
        print('10 years old.')
    case 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18:#匹配多个值
        print('11~18 years old.')
    case 19:
        print('19 years old.')
    case _:# _表示匹配到其他任何情况
        print('not sure.')
```
#### 循环
1. for...in
    ```
    names = ['Michael', 'Bob', 'Tracy']
    for name in names:
        print(name)
    ```
2. while
    ```
    n = 1
    while n <= 100:
        if n > 10: # 当n = 11时，条件满足，执行break语句
            break # break语句会结束当前循环
        if n % 2 == 0: # 如果n是偶数，执行continue语句
        continue # continue语句会直接继续下一轮循环，后续的print()语句不会执行
        print(n)
        n = n + 1
    print('END')
    ```
3. 中止循环 `ctrl+c`
#### dict & set
1. dict 
    字典，使用键-值（key-value）存储，具有极快的查找速度,一个key只能对应一个value。可以通过`'Thomas' in d`来判断key是否存在，也可以通过`.get()`来判断。删除用`.pop(key)`。注意key必须是不可变对象，即可以为字符串、整数等，但不能是list。`.items`可以使配对的变成tuple，整体作为list
    ```
    >>> d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
    >>> d['Michael'] #用ksy查找
    95
    ```
    除了初始化指定，也可以通过key放入
    ```
    >>> d['Adam'] = 67
    >>> d['Adam']
    67
    ```
2. set
    是一组key的集合，但不存储value。内部无序，重复元素自动过滤。通过`.add(key)`来添加，`.remove(key)`来删除。无法储存list。
    ```
    >>> s = {1, 2, 3}
    >>> s = set([1, 2, 3])#提供一个list
    ```
    set可以看成数学意义上的无序和无重复元素的集合，因此，两个set可以做数学意义上的交集、并集等操作：
    ```
    >>> s1 = {1, 2, 3}
    >>> s2 = {2, 3, 4}
    >>> s1 & s2
    {2, 3}
    >>> s1 | s2
    {1, 2, 3, 4}
    ```
#### 函数
1. 可以直接从Python的官方网站查看文档，也可以在交互式命令行通过`help(abs)`查看abs函数的帮助信息
2. 定义函数
    ```
    def my_abs(x): # 函数名、括号、参数、冒号、缩进块
        if x >= 0:
            return x
        else:
            return -x # 用return语句返回

    print(my_abs(-99))
    ```
    没想好怎么写的代码，可以用`pass`让其运行起来
    ```
    if age >= 18:
        pass
    ```
    定义参数检查是很棒的习惯
    ```
    def my_abs(x):
        if not isinstance(x, (int, float)): # ininstance()可以来检查数据类型
            raise TypeError('bad operand type')
        if x >= 0:
            return x
        else:
            return -x
    ```
    注意：Python函数返回的是单一值，但可以是省略括号的tuple~
    ```
    import math

    def move(x, y, step, angle=0):
        nx = x + step * math.cos(angle)
        ny = y - step * math.sin(angle)
        return nx, ny # 正常写就行

    x, y = move(100, 100, 60, math.pi / 6) # 按顺序赋值
    ```
    默认参数：`def power(x, n=2):`可以把第二个参数n的默认值设定为2
        - 必选参数在前，默认参数在后
        - 可以跳着赋值：`enroll('Adam', 'M', city='Tianjin')`
        - 默认参数必须指向不变量 eg.None
    可变参数：加一个`*`号
    ```
    def calc(*numbers):
        sum = 0
        for n in numbers:
            sum = sum + n * n
        return sum

    calc(1, 2) # 会自己转成tuple，若输入a=9会归入**kw

    nums = [1, 2, 3]
    calc(*nums) #把list或tuple的元素变成可变参数
    ```
    关键字参数：可以收到更多的参数，用的是diict
    ```
    def person(name, age, **kw):
        print('name:', name, 'age:', age, 'other:', kw)
    ```
    命名关键词参数：只接收city和job作为关键字参数,调用时必须写 `city=...` 和` job=...`，也可以设定默认值
    ```
    def person(name, age, *, city, job):
        print(name, age, city, job)
    ```
    如果函数定义中已经有了一个可变参数，后面跟着的命名关键字参数就不再需要一个特殊分隔符了
    ```
    def person(name, age, *args, city, job):
        print(name, age, args, city, job)
    ```
    参数定义的顺序必须是：必选参数、默认参数、可变参数、命名关键字参数和关键字参数。
    ```
    def f1(a, b, c=0, *args, **kw):
    ```

3. 导入函数
   
    用`from abstest import my_abs`来导入，注意不含.py扩展名
4. 递归函数
    尾递归是指，在函数返回的时候，调用自身本身，并且，return语句不能包含表达式。这样，编译器或者解释器就可以把尾递归做优化，使递归本身无论调用多少次，都只占用一个栈帧，不会出现栈溢出的情况。
#### 高级特性
1. 切片
    ```
    L[0:3] #从索引0开始取，直到索引3为止，但不包括索引3
    L[:3] #如果第一个索引是0，还可以省略
    L[-2:] #从-2取到-1
    L[:] #复制一个
    (0, 1, 2, 3, 4, 5)[:3] #可以切tuple
    'ABCDEFG'[::2] #也可以切字符串，这里表示跳1个 输出ACEG
    ```
2. 迭代

    `for...in`只要可以迭代就行：list/tuple/dict/字符串，可以同时引用多个变量
    - 可以用collections.abc模块的Iterable类型判断， `isinstance('abc', Iterable)`
    - enumerate函数可以把一个list变成索引-元素对，`for i, value in enumerate(['A', 'B', 'C']):`

3. 列表生成式
    - `[x * x for x in range(1, 11) if x % 2 == 0]`生成x*x的列表，还可以筛选出仅偶数的平方
    - `[m + n for m in 'ABC' for n in 'XYZ']`双重循环
    - `[x if x % 2 == 0 else -x for x in range(1, 11)]`不加else的话，若x是奇数就不会有输出了...

4. 生成器
    - `g = (x * x for x in range(10))`区别在于这里是括号
    - `next(g)`可以获得下一个返回值；当然可以用for循环`for n in fib(6):`
    - 一个函数定义中包含`yield`关键字，那它就是一个generator函数，每次调用遇到next()的时候执行，遇到`yield`语句返回 
        - `yield`后面接表达式，约为return
        - 杨辉三角
        ```
        def triangles():
        L = [1]                 # 第一行
        while True:
        yield L             # 返回当前行
        # 生成下一行：首尾为1，中间为上一行相邻两数之和
        L = [1] + [L[i] + L[i+1] for i in range(len(L)-1)] + [1] #太简洁了
        ```
5. 迭代器

    可以被next()函数调用并不断返回下一个值的对象称为迭代器：Iterator
    - `isinstance(iter([]), Iterator)`可以用iter()把Iterable变成Iterator

#### 函数式编程
函数式编程的一个特点就是，允许把函数本身作为参数传入另一个函数，还允许返回一个函数！Python对函数式编程提供部分支持。由于Python允许使用变量，因此，Python不是纯函数式编程语言。
1. 高阶函数
    - map/reduce():对序列每个元素执行相同操作，返回迭代器;对序列元素进行从左到右累积归约，返回单个值。格式都为`map(function, iterable, ...)`
    ```
    from functools import reduce
    nums = [1, 2, 3, 4]
    squared = map(lambda x: x**2, nums)
    sum_of_squares = reduce(lambda x, y: x + y, squared)
    print(sum_of_squares)   # 30
    #计算列表中所有元素的平方和
    #reduce(lambda x, y: x + y, map(lambda x: x**2, nums))
    ```
    - fliter():把传入的函数依次作用于每个元素，然后根据返回值是True还是False决定保留还是丢弃该元素。注意，返回的是Iterator，需要用list()获取所有结果
    ```
    def _odd_iter():
        n = 1
        while True:
            n = n + 2
            yield n

    def _not_divisible(n):
        return lambda x: x % n > 0 #返回一个匿名函数,利用了闭包，把 n 保存在返回的函数中，每一次生成都有一个自己的定义域

    def primes():
        yield 2
        it = _odd_iter()  # 初始序列
        while True:
            n = next(it)  # 返回序列的第一个数
            yield n
            it = filter(_not_divisible(n), it)  # 构造新序列,也是一个迭代器，层层嵌套

    # 打印100以内的素数:
    for n in primes():
        if n < 100:
            print(n)
        else:
            break
    ```
    - sorted:对list从小到大排序，key可以接入函数作用在每一个元素上,reverse可以倒序
    ```sorted([36, 5, -12, 9, -21], key=abs, reverse=True)```
2. 返回函数 创建带有“记忆”的函数（闭包）
3. 匿名函数 lambda
4. 装饰器
    - 函数对象有一个__name__属性（注意：是前后各两个下划线），可以拿到函数的名字`now.__name__`
    - 本质上，是一个返回函数的高阶函数
    ```
    import functools # 让被装饰后的函数保留原函数的“身份”，调用__name__得到的是原函数名，使得装饰器对用户透明

    def log(text):
        def decorator(func): #三层的原因：加一层来接收参数text，否则写作log(func)
            @functools.wraps(func) 
            def wrapper(*args, **kw): #装饰器针对各种各样的函数，这里只改变函数名字罢了
                print('%s %s():' % (text, func.__name__))
                return func(*args, **kw)
            return wrapper
        return decorator

    @log('execute')
    def now():
        print('2024-6-1')
    ```
5. 偏函数

    `functools.partial`的作用就是，把一个函数的某些参数给固定住（也就是设置默认值），返回一个新的函数，调用这个新函数会更简单
    ```
    def int2(x, base=2):
        return int(x, base)

    >>> import functools
    >>> int2 = functools.partial(int, base=2) # 也可以在函数调用时传入其他值：int2('1000000', base=10)
    >>> int2('1000000')
    64
    >>> int2('1010101')
    85
    ```
    在 partial 中传入位置参数时，这些参数会被添加到原函数参数列表的最左边，也就是优先固定前面的参数`max2 = functools.partial(max, 10)`;如果使用关键字参数固定，则不会受位置影响，而是按关键字匹配 `p = partial(max, b=10)`
#### 模块
1. 使用模块
```
#!/usr/bin/env python3 #让这个hello.py文件直接在Unix/Linux/Mac上运行
# -*- coding: utf-8 -*- # 表示.py文件本身使用标准UTF-8编码

' a test module ' # 任何模块代码的第一个字符串都被视为模块的文档注释

__author__ = 'Michael Liao' #使用__author__变量把作者写进去，这样当你公开源代码后别人就可以瞻仰你的大名

import sys #sys在这里作变量

def test():
    args = sys.argv #argv用list存储了命令行的所有参数。argv至少有一个元素，因为第一个参数永远是该.py文件的名称
    if len(args)==1:
        print('Hello, world!')
    elif len(args)==2:
        print('Hello, %s!' % args[1])
    else:
        print('Too many arguments!')

if __name__=='__main__': #每个模块（即 .py 文件）都有一个内置属性 __name__用于表示当前模块的名称
#当模块被直接执行时，例如命令行，__name__ 被赋值为 '__main__'.在其他地方导入该hello模块时，if判断将失败，因此，这种if测试可以让一个模块通过命令行运行时执行一些额外的代码，最常见的就是运行测试
#调用hello.test()时，才能打印出Hello, world!
    test()

#在命令行运行
$ python hello.py Michael #命令行参数，它的主要作用是让程序在启动时接收外部输入，从而动态地控制程序的行为，而无需修改代码；常见--port 8080
```
2. 作用域
    - 公开的（public）函数和变量
    - 以双下划线开头和结尾的变量，如 __name__、__author__、__doc__，是 Python 定义的特殊变量。它们有特殊用途，可以被直接引用，但通常不应该自己随意定义这种格式的变量，以免与 Python 内置的特殊变量冲突。
    - 以单下划线 _ 开头（如 _private）或以双下划线开头但非结尾（如 __private，则不可以用，但能用Student__private）的函数或变量，按约定被视为非公开的，即“私有”。它们不应该被模块外部直接引用，而是仅供模块内部使用。但只是约定。
3. 模块搜索路径
    默认情况下，Python解释器会搜索当前目录、所有已安装的内置模块和第三方模块，搜索路径存放在sys模块的path变量。
#### 面向对象编程
1. 类和实例
    ```
    class Student(object): #class后面紧接着是类名，即Student，类名通常是大写开头的单词，紧接着是(object)，表示该类是从哪个类继承下来的
        name = 'Student' #实例属性
        def __init__(self, name, score):#第一个参数永远是实例变量self，但使用时不需要传
            self.name = name
            self.score = score
    >>> bart = Student('Bart Simpson', 59)
    >>> bart.name #数据封装
    'Bart Simpson'
    >>> bart.score
    59
    ```
    python是动态语言，可以用`bart.age = 8`来添加新的键值对，也就是给实例绑定新属性，但只针对bart有效
2. 继承和多态
    - 继承可以把父类的所有功能都直接拿过来，这样就不必从零做起，子类只需要新增自己特有的方法，也可以把父类不适合的方法覆盖重写。
    - 对于Python这样的动态语言来说，则不一定需要传入Animal类型。我们只需要保证传入的对象有一个run()方法就可以了
3. 获取对象信息
    - `type()`用来判断对象类型，返回对应的Class类型。使用types模块中定义的常量来判断函数
    - `isinstance()`可以用来判断class的类型
    - `dir()`获得一个对象的所有属性和方法，返回一个包含字符串的list
    ```
    >>> setattr(obj, 'y', 19) # 设置一个属性'y'
    >>> hasattr(obj, 'y') # 有属性'y'吗？
    True
    >>> getattr(obj, 'y') # 获取属性'y'
    19
    >>> obj.y # 获取属性'y'
    19
    ```
#### 面向对象高级编程
1. 使用__slots__：可以限制class实例能添加的属性，但是对其子类不起作用
2. @property:把一个方法变成属性调用（即可以给出限制）
    ```
    class Student:
        def __init__(self):
            self._score = 0   # 用一个“私有”变量存储实际值

        @property
        def score(self):
            """getter，访问时自动调用"""
            return self._score #属性的方法名不要和实例变量重名

        @score.setter # 删除后只可读
        def score(self, value):
            """setter，赋值时自动调用"""
            if not 0 <= value <= 100:
                raise ValueError('score must between 0 ~ 100')
            self._score = value
    ```
3. 多重继承：可以继承多个类`class Dog(Mammal, Runnable):`
4. 定制类：
    - __init__
    - __str__
    ```
    class Student(object):
        def __init__(self, name,score): #初始化
            self.name = name
            self.score = score    # 绑定 score 属性
        def __str__(self):
            return 'Student object (name=%s)' % self.name #调整print的东西
        __repr__ = __str__ #这里针对的是直接敲变量

    s = Student('Alice', 90)      # 在对象创建后立即被调用，不再手动调用
    ```
    - __iter__
    ……遇到了再学吧。
5. 使用枚举类
    ```
    from enum import Enum

    Month = Enum('Month', ('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'))

    @unique #检查有没有重复值
    class Month(Enum): # 可以指定特定的值
        Jan=0
    # 第一个参数是枚举的名称（通常与变量名一致）
    # 第二个参数是一个包含所有成员名称的序列（元组或列表）
    # 通过 Month.Jan 可以直接引用该成员,也可以通过 Month['Jan'] 或 Month(1) 等方式访问
    # 成员本身是一个枚举实例，具有 name 和 value 属性 (默认value从 1 开始自动赋值)
    ```
6. 使用元类
    - type():可以查看一个类型或变量的类型;也可以创建class
    - metaclass()
#### 错误、调试与测试
1. 错误处理
    - try...except...finally
    ```
    try:
        print('try...')
        r = 10 / 0
        print('result:', r)
    except ZeroDivisionError as e: #执行出错，跳转至错误处理代码
        print('except:', e)
    finally: #finally如果有一定会执行
        print('finally...')
    print('END')
    ```
        - Python所有的错误都是从BaseException类派生的
    - 调用栈 ：最后的是出错位置
    - 记录错误：logging模块。程序打印完错误信息后会继续执行，并正常退出；logging还可以把错误记录到日志文件里，方便事后排查。
    - 抛出错误：首先根据需要，可以定义一个错误的class，选择好继承关系，然后，用raise语句抛出一个错误的实例
2. 调试
    - print() 打印出来
    - 断言：assert n != 0, 'n is zero!' ，执行失败，assert语句本身就会抛出AssertionError。启动python是可以用$ python -O err.py 来使其成为pass
    - logging:
    - $ python -m pdb err.py:输入命令l来查看代码,输入命令n可以单步执行代码;任何时候都可以输入命令p 变量名来查看变量;输入命令q结束调试，退出程序
    - import pdb，然后，在可能出错的地方放一个pdb.set_trace()，就可以设置一个断点
    - IDE
3. 单元测试unittest
4. 文档测试doctest
    ```
    if __name__=='__main__':
        import doctest
        doctest.testmod()
    ```

#### IO编程

```
with open('/Users/michael/test.txt', 'w') as f:
    f.write('Hello, world!')
```
#### 进程和线程