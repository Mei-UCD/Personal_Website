---
title: 电影评论情感分析
description: 基于词典和规则的情感分析项目，对电影评论进行正负面倾向统计
image: /images/SentimentalAnalysis/cover.png
category: DataScience
---

### 🧭 项目背景

**Github**： [访问网站](https://github.com/Mei-UCD/Text_Sentimental_Analysis)

该项目是我硕士期间 Artificial Intelligence 这门课程的最终作业，旨在分析电影评论文本的情感倾向（正面或负面）。通过文本预处理、情感词典匹配以及基于技术的规则方法，实现对评论的情感评分与统计分析。

---

### 🧱 技术栈

- Python, Pandas, Numpy
- NLTK (分词、停用词、词形还原)
- Matplotlib（可视化）

---

### 🧩项目结构与主要任务

| 任务编号 | 任务名称             | 主要内容                                       |
| -------- | -------------------- | ---------------------------------------------- |
| Task 1   | 数据理解             | 数据加载，评论长度统计，缺失值处理             |
| Task 2   | 文本预处理与情感评分 | 分词、去停用词、词形还原，情感词计数及得分计算 |
| Task 3   | 结果分析与可视化     | 统计正负面比例，绘制评分分布及词频图           |

---

### 🧑‍💻具体实现细节

#### Task 1: 数据加载

- 数据集包含数据列 `Rating` `Title` `Date` `Helpful_Vote` `Total_Vote` `Review` `Movie`
- 总样本数：2146 条

#### Task 2: 抽出对象数据

- 针对数据列 `Review` 评论文本进行分析

#### Task 3: 文本预处理

- 下载 NLTK 的分词数据，对抽取出的每条 `Review` 进行分词
- 去除标点符号、统一小写、停用词过滤、词形还原

#### Task 4: 情感词典分析

- Github 中下载 `pos_words.txt` （包含正向情绪词）和 `neg_words.txt` 文本（包含负向情绪词）
- 对每条 review 执行
  - 统计正向词数量 (pos_count)
  - 统计负向词数量 (neg_count)
  - 计算情感得分 (sentiment)：
    ```math
    \text{sentiment} = \frac{\text{pos\_count} - \text{neg\_count}}{\text{total\_len}}
    ```

#### Task 5: 可视化结果

- 对 `review` 按 sentiment 进行分组
- 绘制柱状图
    <div style="display:flex; flex-direction:column; align-items:center;">
        <img src="/images/SentimentalAnalysis/cover.png" style="width:90%;">
    </div>

---

### 📈总结

通过基于词典的情感分析方法，本项目实现了对电影评论的自动化情感倾向评价。
在没有使用机器模型的前提下，仅依赖文本清洗与情感词典，即可对 2000+ 条评论进行有效的正负向情绪判断，并通过可视化方式展现情感分布规律。

整个过程帮助我更深入地理解了：

- NLP 预处理（分词、停用词过滤、词形还原）的完整流程
- 基于规则的情感分析方法的优缺点
- 如何从零构建一条端到端的文本分析 pipeline

该项目奠定了我对 文本处理 与 情感分析 的基础认识，为之后深入学习机器学习与深度学习奠定了兴趣。
