import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Eye, ChevronDown, ArrowRight } from 'lucide-react'
import './App.css'

// Import images
import selfieImage from './assets/图1.png'
import posterImage from './assets/图2.png'
import tencentImage from './assets/图3.png'

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [showHiddenContent1, setShowHiddenContent1] = useState(false)
  const [showHiddenContent2, setShowHiddenContent2] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const sections = [
    { id: 'hero', title: 'AIGC Training' },
    { id: 'chapter1', title: '什么是AIGC' },
    { id: 'chapter2', title: '常用的AI工具' },
    { id: 'chapter3', title: '提示词设计' },
    { id: 'chapter4', title: 'AI Agent' },
    { id: 'chapter5', title: '谢谢观看' }
  ]

  const scrollToSection = (index) => {
    setCurrentSection(index)
    const element = document.getElementById(sections[index].id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCelebrate = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000) // Hide after 5 seconds
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const newSection = Math.floor(scrollPosition / windowHeight)
      if (newSection !== currentSection && newSection < sections.length) {
        setCurrentSection(newSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentSection, sections.length])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 right-8 z-50 flex flex-col gap-2 pt-8">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full smooth-transition ${
              currentSection === index ? 'bg-primary' : 'bg-gray-600'
            } hover:bg-primary/80`}
            title={section.title}
          />
        ))}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center luxury-gradient">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto px-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-shadow-luxury">
            AIGC
            <span className="gold-accent"> Training</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
            Professional AI Content Generation Mastery
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection(1)}
          >
            <ChevronDown className="w-8 h-8 mx-auto text-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Chapter 1: What is AIGC */}
      <section id="chapter1" className="min-h-screen section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-16 gold-accent"
          >
            章节一：什么是AIGC
          </motion.h2>

          <div className="flex items-center justify-center min-h-[60vh]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-8">
                1.1 写稿子不熬夜、画画不拿笔、写代码不敲键盘
              </h3>
              <div className="space-y-6 text-lg">
                <p>你提供 <span className="gold-accent font-semibold">想法（提示词）</span>，</p>
                <p>AI 提供 <span className="gold-accent font-semibold">结果（文字、图像、音频、视频……）</span></p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapter 1.2: Separate Screen */}
      <section id="chapter1-2" className="min-h-screen section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              1.2 猜一下哪个真实自拍？
            </h3>
            <div className="relative">
              <img
                src={selfieImage}
                alt="AI Generated Selfies"
                className="w-full max-w-4xl mx-auto rounded-2xl luxury-shadow"
              />
              <div className="mt-8 text-center">
                <Button
                  onClick={() => setShowHiddenContent1(!showHiddenContent1)}
                  className="bg-primary text-black hover:bg-primary/80 smooth-transition"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  watch
                </Button>
                <AnimatePresence>
                  {showHiddenContent1 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mt-6 p-6 bg-card rounded-lg border border-border max-w-4xl mx-auto"
                    >
                      <p className="text-gray-300 leading-relaxed">
                        一张极其平庸的iPhone自拍照片，没有清晰的主体和取景，只是一张漫不经心的快照。照片略带动态模糊由于阳光不均匀略微过曝。角度尴尬，构图拙劣，整体效果平庸至极，就像是从口袋里掏出手机自拍时不小心拍到的一样。照片中是一位二十多岁的亚洲漂亮女孩，坐在纽约一家普通餐厅的户外座位上，自然而然地，竖屏拍摄，长宽比 9:16。
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 1.3: Tencent Implementation Results */}
      <section id="chapter1-3" className="min-h-screen section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 gold-accent">
                1.3 看看腾讯内部落地成效
              </h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-5xl"
            >
              <img
                src={tencentImage}
                alt="Tencent Internal AIGC Implementation Results"
                className="w-full rounded-2xl luxury-shadow"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapter 2: AI Tools */}
      <section id="chapter2" className="min-h-screen section-padding bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-16 gold-accent"
          >
            章节二：常用的AI工具
          </motion.h2>

          <div className="grid gap-12">
            {/* ChatGPT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-card p-8 rounded-2xl luxury-shadow"
            >
              <h3 className="text-2xl font-bold mb-4 gold-accent">ChatGPT</h3>
              <p className="text-lg mb-4">擅长：文案、沟通、总结</p>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">提示词：</p>
                <p className="mb-4">写5个关于夏天防晒的有钩子的开头，每个不超过20字</p>
                <p className="text-sm text-gray-400 mb-2">AI输出：</p>
                <p className="gold-accent">晒黑和晒伤，哪个更可怕？</p>
              </div>
            </motion.div>

            {/* DeepSeek */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl luxury-shadow"
            >
              <h3 className="text-2xl font-bold mb-4 gold-accent">DeepSeek</h3>
              <p className="text-lg mb-4">擅长：数学推理、逻辑分析</p>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">提示词：</p>
                <p className="mb-4">3+4等于几？</p>
                <p className="text-sm text-gray-400 mb-2">AI输出：</p>
                <p>3 + 4 = 7。这是一个基本的算术运算，我应该确认这个答案是否正确。回想一下，加法是将两个数值相加得到总和。3和4都是正整数，它们的和是7。作为AI助手，我应该以友好、准确的方式回复。用户可能是在测试我，或者是一个孩子在学习数学，所以我应该保持简单明了。</p>
              </div>
            </motion.div>

            {/* Manus/Genspark/扣子空间 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-card p-8 rounded-2xl luxury-shadow"
            >
              <h3 className="text-2xl font-bold mb-4 gold-accent">Manus/Genspark/扣子空间</h3>
              <p className="text-lg mb-4">擅长：调研/数据分析</p>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">提示词：</p>
                <p className="mb-4 text-sm">AI 风格化照片（这里主要指人像照片风格化）这类 app 或者网站从出不穷，比如用 AI 生成各类风格的写真照，从之前很热门的宫崎骏风到现在爆火的吉卜力风，像素风等，请你做个详尽的调研报告...</p>
                <p className="text-sm text-gray-400 mb-2">AI输出：</p>
                <a href="https://znwkspru.gensparkspace.com/" className="gold-accent hover:underline">
                  https://znwkspru.gensparkspace.com/
                </a>
              </div>
            </motion.div>

            {/* ima */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-card p-8 rounded-2xl luxury-shadow"
            >
              <h3 className="text-2xl font-bold mb-4 gold-accent">ima</h3>
              <p className="text-lg mb-4">擅长：引用知识库</p>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">提示词：</p>
                <p className="mb-4">作为一个直客通新入职的商务，要签约新酒店，有什么技巧</p>
                <p className="text-sm text-gray-400 mb-2">AI输出：</p>
                <a href="https://ima.qq.com/share/#/knowledge-base-chat/Xg5cPUbEn" className="gold-accent hover:underline">
                  https://ima.qq.com/share/#/knowledge-base-chat/Xg5cPUbEn
                </a>
              </div>
            </motion.div>

            {/* 即梦AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-card p-8 rounded-2xl luxury-shadow"
            >
              <h3 className="text-2xl font-bold mb-4 gold-accent">即梦AI</h3>
              <p className="text-lg mb-4">擅长：中文海报</p>
              <div className="bg-secondary p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-400 mb-2">提示词：</p>
                <p className="mb-4 text-sm">背景是大红色彩带和金色纸屑飞舞，标题"狂欢盛典·双11巨惠"，字形立体化加阴影；中间环形装饰内放置福袋、红包图案；下方小字附加优惠说明"全场满300减50，再送精美礼品"；整体营造喜庆氛围，吸引用户注意力。</p>
                <p className="text-sm text-gray-400 mb-2">AI输出：</p>
              </div>
              <img
                src={posterImage}
                alt="AI Generated Poster"
                className="w-full max-w-md mx-auto rounded-lg luxury-shadow"
              />
            </motion.div>
          </div>
        </div>
      </section>

        {/* Chapter 3: Prompt Design */}
      <section id="chapter3" className="min-h-screen section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-16 gold-accent"
          >
            章节三：为什么AI输出的总不是你想要的？
          </motion.h2>

          <div className="flex items-center justify-center min-h-[60vh]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-8">
                掌握提示语设计，AIGC时代的必备技能
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapter 3 Content: Prompt Design Details */}
      <section className="min-h-screen section-padding">
        <div className="max-w-6xl mx-auto">

          {/* 3.1 Basic Structure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h4 className="text-xl font-semibold mb-8 gold-accent">3.1 提示词的基本结构</h4>
            <p className="text-lg mb-8">AI 提示语的基本结构一般包括三个部分：指令、上下文和期望。</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg luxury-shadow">
                <h5 className="font-semibold mb-4 gold-accent">指令（Instruction）</h5>
                <p className="text-sm">提示的核心部分，清楚地告诉 AI 你要它做什么，比如"写一封邮件"、"分析这段文字"或"总结成表格"等。</p>
              </div>
              <div className="bg-card p-6 rounded-lg luxury-shadow">
                <h5 className="font-semibold mb-4 gold-accent">上下文（Context）</h5>
                <p className="text-sm">为 AI 提供必要的背景信息，使其更好地理解任务，比如角色设定、语境、内容范围、使用对象等。</p>
              </div>
              <div className="bg-card p-6 rounded-lg luxury-shadow">
                <h5 className="font-semibold mb-4 gold-accent">期望（Expectation）</h5>
                <p className="text-sm">说明你对输出的具体要求，如格式、风格、长度，甚至希望 AI 采用的语气、步骤、语言风格等。</p>
              </div>
            </div>

            <div className="mt-8">
              <Button
                onClick={() => setShowHiddenContent2(!showHiddenContent2)}
                className="bg-primary text-black hover:bg-primary/80 smooth-transition"
              >
                <Eye className="w-4 h-4 mr-2" />
                watch
              </Button>
              <AnimatePresence>
                {showHiddenContent2 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 p-6 bg-card rounded-lg border border-border"
                  >
                    <h6 className="font-semibold mb-4">举个例子：</h6>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-400 mb-2">原始提示：</p>
                        <p className="bg-secondary p-3 rounded">请写一篇关于人工智能的文章。</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-2">优化后的提示（带结构）：</p>
                        <p className="bg-secondary p-3 rounded">你是一位科技杂志的编辑（上下文），请撰写一篇关于人工智能对未来教育影响的文章（指令），要求逻辑清晰、语气专业，篇幅在 500 字左右（期望）。</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* 3.2 Different Roles and Scenarios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h4 className="text-xl font-semibold mb-8 gold-accent">3.2 不同角色下的场景与提示词</h4>
            
            {/* Product/Operations */}
            <div className="mb-12">
              <h5 className="text-lg font-semibold mb-6 text-white">3.2.1 产品/运营</h5>
              <div className="grid gap-6">
                <div className="bg-card p-6 rounded-lg luxury-shadow">
                  <h6 className="font-semibold mb-3 gold-accent">场景 1：头脑风暴 & 功能优化</h6>
                  <div className="bg-secondary p-4 rounded text-sm">
                    <p className="text-gray-400 mb-2">提示词：</p>
                    <p>你是一个资深产品经理，请帮我头脑风暴三个关于酒店微信营销（小程序）的新功能，目标是提升用户粘性和日活，并给出每个功能的可行性评分。</p>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg luxury-shadow">
                  <h6 className="font-semibold mb-3 gold-accent">场景 2：分析用户反馈，自动归类需求标签 + 优先级</h6>
                  <div className="bg-secondary p-4 rounded text-sm">
                    <p className="text-gray-400 mb-2">提示词：</p>
                    <p>以下是100条用户评论，请提取其中出现频率最高的功能需求，并根据痛点程度打上优先级标签（P0 / P1 / P2）。</p>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg luxury-shadow">
                  <h6 className="font-semibold mb-3 gold-accent">场景 3：营销活动设计</h6>
                  <div className="bg-secondary p-4 rounded text-sm">
                    <p className="text-gray-400 mb-2">提示词：</p>
                    <p>请为一款效率类 App 设计一个面向大学生的开学季拉新活动，包括活动名称、玩法规则、传播文案，以及预算 1 万元的执行建议。</p>
                  </div>
                </div>
                
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-sm"><span className="gold-accent font-semibold">总结句式模板：</span></p>
                  <p className="text-sm mt-2">你是一位资深【产品经理 / 运营专家】（角色），请基于【目标或场景】（上下文），提出/撰写/分析【具体任务】（指令），要求【输出格式/数量/风格】（期望）。</p>
                </div>
              </div>
            </div>

            {/* Human Resources */}
            <div className="mb-12">
              <h5 className="text-lg font-semibold mb-6 text-white">3.2.2 人力资源</h5>
              <div className="grid gap-6">
                <div className="bg-card p-6 rounded-lg luxury-shadow">
                  <h6 className="font-semibold mb-3 gold-accent">场景 1：季度薪酬数据分析与图表输出</h6>
                  <div className="bg-secondary p-4 rounded text-sm">
                    <p className="text-gray-400 mb-2">提示词：</p>
                    <p>请分析以下 Excel 中员工薪酬数据，生成各部门平均薪酬、离职率趋势图，并用 200 字总结薪酬变化趋势。</p>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg luxury-shadow">
                  <h6 className="font-semibold mb-3 gold-accent">场景 2：JD 编写与优化</h6>
                  <div className="bg-secondary p-4 rounded text-sm">
                    <p className="text-gray-400 mb-2">提示词：</p>
                    <p>请根据以下岗位信息（职位：内容运营，要求：新媒体经验2年以上、沟通能力强），生成一份标准化的 JD，语气要正式，结构清晰。</p>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg luxury-shadow">
                  <h6 className="font-semibold mb-3 gold-accent">场景 3：筛选简历、推荐候选人画像</h6>
                  <div className="bg-secondary p-4 rounded text-sm">
                    <p className="text-gray-400 mb-2">提示词：</p>
                    <p>以下是5份简历，请根据岗位要求'产品运营实习生'筛选出最匹配的2位候选人，并简述匹配理由。</p>
                  </div>
                </div>
                
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-sm"><span className="gold-accent font-semibold">总结句式模板：</span></p>
                  <p className="text-sm mt-2">你是企业人力资源专家，请基于【数据/岗位/流程背景】（上下文），完成【招聘/分析/写作】类任务（指令），输出要求【语气/结构/篇幅/格式】（期望）。</p>
                </div>
              </div>
            </div>

            {/* Finance */}
            <div className="mb-12">
              <h5 className="text-lg font-semibold mb-6 text-white">3.2.3 财务</h5>
              <div className="grid gap-6">
                <div className="bg-card p-6 rounded-lg luxury-shadow">
                  <h6 className="font-semibold mb-3 gold-accent">场景 1：智能审核与风控识别</h6>
                  <div className="bg-secondary p-4 rounded text-sm">
                    <p className="text-gray-400 mb-2">提示词：</p>
                    <p>你是一名企业财务风控人员，请审核以下费用报销记录（见表格），识别可能存在的不合规项目，按照'项目名｜问题描述｜建议'的格式输出，建议控制在200字以内。</p>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg luxury-shadow">
                  <h6 className="font-semibold mb-3 gold-accent">场景 2：月度报表分析 & PPT 自动生成</h6>
                  <div className="bg-secondary p-4 rounded text-sm">
                    <p className="text-gray-400 mb-2">提示词：</p>
                    <p>请根据本月财务数据，生成一份高管汇报用的财务总结 PPT，重点展示现金流变化、预算执行情况和异常波动。</p>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg luxury-shadow">
                  <h6 className="font-semibold mb-3 gold-accent">场景 3：税务计算 & 政策摘要</h6>
                  <div className="bg-secondary p-4 rounded text-sm">
                    <p className="text-gray-400 mb-2">提示词：</p>
                    <p>请根据2024年小微企业税收优惠政策，整理出一份财务部门内部培训材料，要求通俗易懂，控制在 500 字内。</p>
                  </div>
                </div>
                
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-sm"><span className="gold-accent font-semibold">总结句式模板：</span></p>
                  <p className="text-sm mt-2">你是一名企业财务人员，请依据【报表/政策/数据】（上下文），完成【分析/计算/报告撰写】（指令），输出要求【格式清晰/控制篇幅/风格严谨】（期望）。</p>
                </div>
              </div>
            </div>

            {/* Personal Use */}
            <div className="mb-12">
              <h5 className="text-lg font-semibold mb-6 text-white">3.2.4 不止于工作</h5>
              <div className="grid gap-6">
                <div className="bg-card p-6 rounded-lg luxury-shadow">
                  <h6 className="font-semibold mb-3 gold-accent">场景 1：减肥/健康管理助手</h6>
                  <div className="bg-secondary p-4 rounded text-sm">
                    <p className="text-gray-400 mb-2">提示词：</p>
                    <p>你是一名私人健身教练，我是一位办公室女性，28岁，久坐、运动少，最近想减肥 5kg，请为我定制一套一周饮食和运动计划，每天控制在1500大卡以内。</p>
                    <p className="mt-2">另：帮我分析我吃的这些东西今天摄入了多少热量？</p>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg luxury-shadow">
                  <h6 className="font-semibold mb-3 gold-accent">场景 2：算命 / 星座趣味助手</h6>
                  <div className="bg-secondary p-4 rounded text-sm">
                    <p className="text-gray-400 mb-2">提示词：</p>
                    <p>你是一个有趣的占星师，请根据我 1992 年 5 月 1日在北京出生，太阳星座是金牛，帮我分析我的职场优势和缺点，用幽默、有点毒舌的风格说出来。</p>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg luxury-shadow">
                  <h6 className="font-semibold mb-3 gold-accent">场景 3：心理咨询 / 情绪陪伴</h6>
                  <div className="bg-secondary p-4 rounded text-sm">
                    <p className="text-gray-400 mb-2">提示词：</p>
                    <p>你是一位温柔但理智的心理咨询师，我最近感到很焦虑，总觉得自己工作不如别人，请用倾听+引导的方式陪我聊聊，不要直接给建议，一开始请先问我3个问题。</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tips Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h4 className="text-xl font-semibold mb-8 gold-accent">3.3 珍藏多年的一些小技巧</h4>
            
            <div className="grid gap-6">
              <div className="bg-card p-6 rounded-lg luxury-shadow">
                <h5 className="font-semibold mb-3 gold-accent">3.3.1 及时纠正和迭代</h5>
                <p>AI 不会介意被"打回重写"，它最擅长的就是迭代优化。你越敢提要求，它的输出就越接近你的预期。</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg luxury-shadow">
                <h5 className="font-semibold mb-3 gold-accent">3.3.2 对话跑偏，就新建窗口</h5>
                <p>当你觉得越改越跑偏，不如停下来、另起一轮。就像写稿写乱了，清空重写反而更快。</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg luxury-shadow">
                <h5 className="font-semibold mb-3 gold-accent">3.3.3 交叉使用多个 AI工具</h5>
                <p>黄仁勋：我只用这几个 AI 工具：OpenAI • Gemini Pro , Claude 和 Perplexity。我几乎是同时使用这4个AI 的。我会给它们同一个问题，然后让它们给出第二种看法，它们可以互相参考彼此的答案，进一步提升结果质量。</p>
              </div>

              <div className="bg-card p-6 rounded-lg luxury-shadow">
                <h5 className="font-semibold mb-3 gold-accent">3.3.4 复杂任务，首先要确认理解程度</h5>
                <p>你理解了吗？"+"你能重复一遍我想做的目标吗？</p>
              </div>

              <div className="bg-card p-6 rounded-lg luxury-shadow">
                <h5 className="font-semibold mb-3 gold-accent">3.3.5 复杂任务，请求推理</h5>
                <p>请一步步分析这段客户反馈背后的深层原因，而不是直接下结论。</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 4: AI Agent */}
      <section id="chapter4" className="min-h-screen section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-16 gold-accent"
          >
            章节四：关于 AI Agent
          </motion.h2>

          <div className="flex items-center justify-center min-h-[60vh]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-8">
                当 AI 开始自己"干活"了
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapter 4 Content: Examples */}
      <section className="min-h-screen section-padding">
        <div className="max-w-6xl mx-auto">

          {/* 4.1 Example */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h4 className="text-xl font-semibold mb-8 gold-accent">4.1 比如</h4>
            
            <div className="grid gap-8">
              <div className="bg-card p-6 rounded-lg luxury-shadow">
                <div className="mb-6">
                  <p className="text-lg mb-4">你跟 ChatGPT 说："帮我写一篇公众号文章。"它能写。</p>
                  <p className="text-lg mb-4">但你跟 AI Agent 说："帮我发布一篇公众号文章，基于我上周发布的内容，面向新用户群体，再在朋友圈宣传一下。"</p>
                </div>
                
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="font-semibold mb-3 gold-accent">它的行为可能是：</p>
                  <ul className="space-y-2 text-sm">
                    <li>● 自动抓取你上周发过的文章内容</li>
                    <li>● 找出文章里最受欢迎的主题</li>
                    <li>● 再生成一篇延伸内容</li>
                    <li>● 登录公众号平台，排版上传</li>
                    <li>● 生成社交平台预告图文</li>
                    <li>● 用别的 API 调用方式直接发出预热消息</li>
                  </ul>
                  <p className="mt-4 font-semibold">你只说了一句，它就能自己搞定一整套流程。这就是 AI Agent。</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4.2 Another Example */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16 relative"
          >
            <h4 className="text-xl font-semibold mb-8 gold-accent">4.2 再比如（这是一则广告）</h4>
            
            <div className="grid gap-8">
              <div className="bg-card p-6 rounded-lg luxury-shadow">
                <div className="mb-6">
                  <p className="text-lg mb-4">你跟直客通AI案例库说：帮我找一下北京去年双11卖的自助餐产品</p>
                </div>
                
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="font-semibold mb-3 gold-accent">它的行为是：</p>
                  <ul className="space-y-2 text-sm">
                    <li>● 自动识别有效信息（如北京、去年、双 11、自助餐）</li>
                    <li>● 生成伪查询条件</li>
                    <li>● 生成真实查询SQL</li>
                    <li>● 找到案例前端生成案例卡进行展示</li>
                  </ul>
                  <p className="mt-4 font-semibold">BD只说了一句话，它就自己找了一堆案例。这就是 AI Agent。</p>
                </div>
                
                <div className="mt-6 text-center">
                  <Button
                    onClick={handleCelebrate}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 smooth-transition font-semibold px-6 py-2"
                  >
                    🎉 庆祝
                  </Button>
                </div>
              </div>
            </div>

            {/* Confetti Animation */}
            {showConfetti && (
              <div className="fixed inset-0 pointer-events-none z-50">
                {[...Array(100)].map((_, i) => (
                  <div
                    key={i}
                    className="confetti-piece"
                    style={{
                      left: `${40 + Math.random() * 20}%`, // Wider center spread (40-60%)
                      top: '40%', // Start higher up on screen
                      '--random-x': `${(Math.random() - 0.5) * 600}px`, // Wider horizontal spread
                      animationDelay: `${Math.random() * 0.8}s`,
                      backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#FF7675', '#74B9FF', '#FD79A8', '#FDCB6E'][Math.floor(Math.random() * 10)]
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>

          {/* 4.3 Interactive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h4 className="text-xl font-semibold mb-8 gold-accent">4.3 互动</h4>
            
            <div className="bg-card p-8 rounded-lg luxury-shadow text-center">
              <p className="text-xl font-semibold">你希望有个什么 AI Agent 帮你自动完成哪些工作？</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 5: Thank You */}
      <section id="chapter5" className="min-h-screen flex items-center justify-center luxury-gradient">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-6xl md:text-8xl font-bold gold-accent text-shadow-luxury">
            谢谢观看
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mt-8">
            Thank you for watching
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default App

