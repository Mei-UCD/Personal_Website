---
title: 短文本 ML 分类
description: 机器学习项目，使用自然语言处理（NLP）、传统机器学习和深度学习模型对新闻文章进行分类
image: /images/ArticleClassification/data_final.jpg
category: DataScience
---

### 🧭项目背景

**Github**： [访问网站](https://github.com/Mei-UCD/MachineLearning_TextClassification)

该项目是我硕士期间 Machine Learning 这门课程的最终课题作业。旨在基于简短描述（`short_description`）预测其所属类别。通过文本预处理、特征提取、传统机器学习模型和深度学习模型的比较与优化，最终构建一个性能最优的分类模型。

**数据来源**: Rishabh Misra 提供的 [数据集](https://www.researchgate.net/publication/332141218_News_Category_Dataset)

---

### 🧱技术栈

- Python, Pandas, Numpy
- Scikit-learn
- TensorFlow / Keras
- Matplotlib, Seaborn (可视化)

---

### 🧩项目结构与主要任务

| 任务编号 | 任务名称             | 主要内容                                       |
| -------- | -------------------- | ---------------------------------------------- |
| Task 1   | 数据理解             | 数据加载，词频分析，句子长度统计，缺失值处理   |
| Task 2   | 数据预处理与模型训练 | 数据划分，文本预处理，传统模型与深度学习建模   |
| Task 3   | 模型评估与优化       | 性能评估，混淆矩阵，可视化，模型改进与交叉验证 |

---

### 🧑‍💻具体实现细节

### Task 1: 数据理解

- **数据加载**
  - 数据集包含6列：`category`, `headline`, `authors`, `link`, `short_description`, `date`
  - 本项目主要用到`category`（类别仅限 IMPACT 和 PARENTING ）和`short_description`
  - 总样本数：8000条
- **词频分析**
  - 预处理：展开缩写，去除停用词
  - 使用 CountVectorizer 统计两类文章的高频词
    - **PARENTING** 高频20词 低频20词
    <div style="display:flex; flex-direction:column; align-items:center;">
        <img src="/images/ArticleClassification/data1.jpg" style="width:90%;">
    </div>

    - **IMPACT** 高频20词 低频20词
    <div style="display:flex; flex-direction:column; align-items:center;">
        <img src="/images/ArticleClassification/data2.jpg" style="width:90%;">
    </div>

  - 示例：将 “don't” 转换为 “do not”

- **句子长度统计**
  - PARENTING 均值约30词
  - IMPACT 均值约26词
- **缺失值处理**
  - 发现275条缺失，删除后剩余7725条

---

### Task 2：数据预处理与建模

- **数据划分**
  - 训练集50%（3862条）、验证集20%（1538条）、测试集30%（2318条）
- **文本预处理**
  - 展开缩写、去除停用词
  - 使用 CountVectorizer 进行词袋模型表示
- **传统机器学习模型**
  - 决策树
  - 朴素贝叶斯
- **深度学习模型（自建）**
  - 文本预处理：展开缩写、去标点、分词及序列填充（最大长度150）
  - 标签编码
  - 网络结构：Embedding层 → Flatten层 → Dense层（ReLU激活） → 输出层（sigmoid 激活）
  - 训练参数：二分类交叉熵损失，Adam 优化器，batch_size=32，训练10轮
  - 训练过程可视化：准确率与损失曲线
  <div style="display:flex; gap:10px; align-items:center;">
      <img src="/images/ArticleClassification/data_dp1.jpg" alt="Accuracy" style="width:45%;">
      <img src="/images/ArticleClassification/data_dp2.jpg" alt="Loss" style="width:45%;">
  </div>

---

### Task 3：模型评估与优化

### （1）传统模型性能

- 决策树分类报告（验证集）
<div style="display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: nowrap; max-width: 100%; overflow-x: hidden; padding: 0 5%;">
  <table border="0" cellpadding="3" cellspacing="0" style="border-collapse: collapse; width: 500px; font-family: monospace; font-size: 12px; text-align: center;">
    <thead>
      <tr>
        <th>Class</th>
        <th>Precision</th>
        <th>Recall</th>
        <th>F1-Score</th>
        <th>Support</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>IMPACT</td>
        <td>0.50</td>
        <td>0.61</td>
        <td>0.55</td>
        <td>330</td>
      </tr>
      <tr>
        <td>PARENTING</td>
        <td>0.89</td>
        <td>0.83</td>
        <td>0.86</td>
        <td>1208</td>
      </tr>
      <tr>
        <td><b>Accuracy</b></td>
        <td></td>
        <td></td>
        <td><b>0.79</b></td>
        <td>1538</td>
      </tr>
      <tr>
        <td>Macro Avg</td>
        <td>0.69</td>
        <td>0.72</td>
        <td>0.70</td>
        <td>1538</td>
      </tr>
      <tr>
        <td>Weighted Avg</td>
        <td>0.80</td>
        <td>0.79</td>
        <td>0.79</td>
        <td>1538</td>
      </tr>
    </tbody>
  </table>
  <img src="/images/ArticleClassification/data3.jpg" alt="Confusion Matrix" style="max-width: 500px; width: 300px; height: auto; object-fit: contain;" />
</div>

- 朴素贝叶斯分类报告（验证集）
<div style="display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: nowrap; max-width: 100%; overflow-x: hidden; padding: 0 5%;">
  <table border="0" cellpadding="3" cellspacing="0" style="border-collapse: collapse; width: 500px; font-family: monospace; font-size: 12px; text-align: center;">
    <thead>
      <tr>
        <th>Class</th>
        <th>Precision</th>
        <th>Recall</th>
        <th>F1-Score</th>
        <th>Support</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>IMPACT</td>
        <td>0.44</td>
        <td>0.56</td>
        <td>0.49</td>
        <td>330</td>
      </tr>
      <tr>
        <td>PARENTING</td>
        <td>0.87</td>
        <td>0.81</td>
        <td>0.84</td>
        <td>1208</td>
      </tr>
      <tr>
        <td><b>Accuracy</b></td>
        <td></td>
        <td></td>
        <td><b>0.75</b></td>
        <td>1538</td>
      </tr>
      <tr>
        <td>Macro Avg</td>
        <td>0.66</td>
        <td>0.68</td>
        <td>0.66</td>
        <td>1538</td>
      </tr>
      <tr>
        <td>Weighted Avg</td>
        <td>0.78</td>
        <td>0.75</td>
        <td>0.76</td>
        <td>1538</td>
      </tr>
    </tbody>
  </table>
  <img src="/images/ArticleClassification/data4.jpg" alt="Confusion Matrix" style="max-width: 500px; width: 300px; height: auto; object-fit: contain;" />
</div>

### （2）深度学习模型性能

- 模型准确率达到84%，优于传统模型，但过拟合
    <div style="display:flex; gap:10px; align-items:center;">
        <img src="/images/ArticleClassification/data_dpbefore.jpg" alt="Accuracy" style="width:90%;">
    </div>

- 分类报告（验证集）
<div style="display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: nowrap; max-width: 100%; overflow-x: hidden; padding: 0 5%;">
  <table border="0" cellpadding="3" cellspacing="0" style="border-collapse: collapse; width: 500px; font-family: monospace; font-size: 12px; text-align: center;">
    <thead>
      <tr>
        <th>Class</th>
        <th>Precision</th>
        <th>Recall</th>
        <th>F1-Score</th>
        <th>Support</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>IMPACT</td>
        <td>0.66</td>
        <td>0.51</td>
        <td>0.57</td>
        <td>330</td>
      </tr>
      <tr>
        <td>PARENTING</td>
        <td>0.87</td>
        <td>0.93</td>
        <td>0.90</td>
        <td>1208</td>
      </tr>
      <tr>
        <td><b>Accuracy</b></td>
        <td></td>
        <td></td>
        <td><b>0.84</b></td>
        <td>1538</td>
      </tr>
      <tr>
        <td>Macro Avg</td>
        <td>0.77</td>
        <td>0.72</td>
        <td>0.74</td>
        <td>1538</td>
      </tr>
      <tr>
        <td>Weighted Avg</td>
        <td>0.83</td>
        <td>0.84</td>
        <td>0.83</td>
        <td>1538</td>
      </tr>
    </tbody>
  </table>
  <img src="/images/ArticleClassification/data5.jpg" alt="Confusion Matrix" style="max-width: 500px; width: 300px; height: auto; object-fit: contain;" />
</div>

### （3）模型优化尝试

- 采用更细致的文本预处理：停用词剔除、小写化、词形还原等
- 决策树与朴素贝叶斯验证准确率无明显提升甚至下降
- 深度学习模型多次架构调整：
  - 深度学习模型优化1分类报告（验证集）
  <div style="display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: nowrap; max-width: 100%; overflow-x: hidden; padding: 0 5%;">
    <table border="0" cellpadding="3" cellspacing="0" style="border-collapse: collapse; width: 500px; font-family: monospace; font-size: 12px; text-align: center;">
      <thead>
        <tr>
          <th>Class</th>
          <th>Precision</th>
          <th>Recall</th>
          <th>F1-Score</th>
          <th>Support</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>IMPACT</td>
          <td>0.71</td>
          <td>0.53</td>
          <td>0.61</td>
          <td>330</td>
        </tr>
        <tr>
          <td>PARENTING</td>
          <td>0.88</td>
          <td>0.94</td>
          <td>0.91</td>
          <td>1208</td>
        </tr>
        <tr>
          <td><b>Accuracy</b></td>
          <td></td>
          <td></td>
          <td><b>0.85</b></td>
          <td>1538</td>
        </tr>
        <tr>
          <td>Macro Avg</td>
          <td>0.79</td>
          <td>0.73</td>
          <td>0.76</td>
          <td>1538</td>
        </tr>
        <tr>
          <td>Weighted Avg</td>
          <td>0.84</td>
          <td>0.85</td>
          <td>0.84</td>
          <td>1538</td>
        </tr>
      </tbody>
    </table>
    <img src="/images/ArticleClassification/data_dpimprove1_1.jpg" alt="Confusion Matrix" style="max-width: 500px; width: 300px; height: auto; object-fit: contain;" />
  </div>

  - 深度学习模型优化2分类报告（验证集）
  <div style="display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: nowrap; max-width: 100%; overflow-x: hidden; padding: 0 5%;">
    <table border="0" cellpadding="3" cellspacing="0" style="border-collapse: collapse; width: 500px; font-family: monospace; font-size: 12px; text-align: center;">
      <thead>
        <tr>
          <th>Class</th>
          <th>Precision</th>
          <th>Recall</th>
          <th>F1-Score</th>
          <th>Support</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>IMPACT</td>
          <td>0.80</td>
          <td>0.52</td>
          <td>0.63</td>
          <td>330</td>
        </tr>
        <tr>
          <td>PARENTING</td>
          <td>0.88</td>
          <td>0.96</td>
          <td>0.92</td>
          <td>1208</td>
        </tr>
        <tr>
          <td><b>Accuracy</b></td>
          <td></td>
          <td></td>
          <td><b>0.87</b></td>
          <td>1538</td>
        </tr>
        <tr>
          <td>Macro Avg</td>
          <td>0.84</td>
          <td>0.74</td>
          <td>0.78</td>
          <td>1538</td>
        </tr>
        <tr>
          <td>Weighted Avg</td>
          <td>0.86</td>
          <td>0.87</td>
          <td>0.86</td>
          <td>1538</td>
        </tr>
      </tbody>
    </table>
    <img src="/images/ArticleClassification/data_dpimprove2.jpg" alt="Confusion Matrix" style="max-width: 500px; width: 300px; height: auto; object-fit: contain;" />
  </div>

  - 深度学习模型优化3分类报告（验证集）
  <div style="display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: nowrap; max-width: 100%; overflow-x: hidden; padding: 0 5%;">
    <table border="0" cellpadding="3" cellspacing="0" style="border-collapse: collapse; width: 500px; font-family: monospace; font-size: 12px; text-align: center;">
      <thead>
        <tr>
          <th>Class</th>
          <th>Precision</th>
          <th>Recall</th>
          <th>F1-Score</th>
          <th>Support</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>IMPACT</td>
          <td>0.66</td>
          <td>0.59</td>
          <td>0.63</td>
          <td>330</td>
        </tr>
        <tr>
          <td>PARENTING</td>
          <td>0.89</td>
          <td>0.92</td>
          <td>0.90</td>
          <td>1208</td>
        </tr>
        <tr>
          <td><b>Accuracy</b></td>
          <td></td>
          <td></td>
          <td><b>0.85</b></td>
          <td>1538</td>
        </tr>
        <tr>
          <td>Macro Avg</td>
          <td>0.78</td>
          <td>0.76</td>
          <td>0.77</td>
          <td>1538</td>
        </tr>
        <tr>
          <td>Weighted Avg</td>
          <td>0.84</td>
          <td>0.85</td>
          <td>0.85</td>
          <td>1538</td>
        </tr>
      </tbody>
    </table>
    <img src="/images/ArticleClassification/data_dpimprove3.jpg" alt="Confusion Matrix" style="max-width: 500px; width: 300px; height: auto; object-fit: contain;" />
  </div>

  - 总结

| 深度学习模型优化结构                             | 验证准确率 | 备注                 |
| ------------------------------------------------ | ---------- | -------------------- |
| 优化1：Embedding + Flatten + Dense               | 85%        | 无明显提升，仍过拟合 |
| 优化2：Embedding + GlobalAveragePooling          | **87%**    | 最佳表现             |
| 优化3：Embedding + Conv1D + GlobalAveragePooling | 85%        | 无明显提升，仍过拟合 |

### （4）交叉验证

- 合并训练集与验证集进行5折交叉验证
- 结果对比：

| 模型         | 平均准确率 |
| ------------ | ---------- |
| 决策树       | 68% ~ 70%  |
| 朴素贝叶斯   | 68% ~ 70%  |
| 深度学习模型 | 83% ~ 85%  |

> 深度学习模型表现明显优于传统模型

### （5）测试集表现

- 使用最优模型（优化2）对测试集`test.csv`（2318条数据）进行预测，表现稳定
<div style="display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: nowrap; max-width: 100%; overflow-x: hidden; padding: 0 5%;">
  <table border="0" cellpadding="3" cellspacing="0" style="border-collapse: collapse; width: 500px; font-family: monospace; font-size: 12px; text-align: center;">
    <thead>
      <tr>
        <th>Class</th>
        <th>Precision</th>
        <th>Recall</th>
        <th>F1-Score</th>
        <th>Support</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>IMPACT</td>
        <td>0.81</td>
        <td>0.50</td>
        <td>0.62</td>
        <td>530</td>
      </tr>
      <tr>
        <td>PARENTING</td>
        <td>0.87</td>
        <td>0.96</td>
        <td>0.91</td>
        <td>1788</td>
      </tr>
      <tr>
        <td><b>Accuracy</b></td>
        <td></td>
        <td></td>
        <td><b>0.86</b></td>
        <td>2318</td>
      </tr>
      <tr>
        <td>Macro Avg</td>
        <td>0.84</td>
        <td>0.73</td>
        <td>0.77</td>
        <td>2318</td>
      </tr>
      <tr>
        <td>Weighted Avg</td>
        <td>0.85</td>
        <td>0.86</td>
        <td>0.85</td>
        <td>2318</td>
      </tr>
    </tbody>
  </table>
  <img src="/images/ArticleClassification/data_dpbestmodel_test.jpg" alt="Confusion Matrix" style="max-width: 500px; width: 300px; height: auto; object-fit: contain;" />
</div>

### （6）增大训练集与最终模型

- 合并训练集和验证集，重新训练优化模型2
<div style="display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: nowrap; max-width: 100%; overflow-x: hidden; padding: 0 5%;">
  <table border="0" cellpadding="3" cellspacing="0" style="border-collapse: collapse; width: 500px; font-family: monospace; font-size: 12px; text-align: center;">
    <thead>
      <tr>
        <th>Class</th>
        <th>Precision</th>
        <th>Recall</th>
        <th>F1-Score</th>
        <th>Support</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>IMPACT</td>
        <td>0.72</td>
        <td>0.66</td>
        <td>0.69</td>
        <td>530</td>
      </tr>
      <tr>
        <td>PARENTING</td>
        <td>0.90</td>
        <td>0.93</td>
        <td>0.91</td>
        <td>1788</td>
      </tr>
      <tr>
        <td><b>Accuracy</b></td>
        <td></td>
        <td></td>
        <td><b>0.86</b></td>
        <td>2318</td>
      </tr>
      <tr>
        <td>Macro Avg</td>
        <td>0.81</td>
        <td>0.79</td>
        <td>0.80</td>
        <td>2318</td>
      </tr>
      <tr>
        <td>Weighted Avg</td>
        <td>0.86</td>
        <td>0.86</td>
        <td>0.86</td>
        <td>2318</td>
      </tr>
    </tbody>
  </table>
  <img src="/images/ArticleClassification/data_final.jpg" alt="Confusion Matrix" style="max-width: 500px; width: 300px; height: auto; object-fit: contain;" />
</div>

- 结果观察
  - 总体 Accuracy 没有显著变化，但 IMPACT 类的 Recall 和 F1-score 提升明显 → 模型对少数类（IMPACT）的识别更好
  - Macro F1-score 提升 → 表明模型的分类表现更平衡，不再只偏向 PARENTING 类
  - 增加训练数据 + 重新训练优化模型2 → 模型的泛化能力更强

### 📈总结

- 采用传统机器学习方法（决策树、朴素贝叶斯）在本项目上表现一般
- 自建深度学习模型（Embedding + GlobalAveragePooling1D）显著提升了分类性能，且泛化能力更强
- 细致的文本预处理对传统模型帮助有限，但对深度学习模型有一定正面影响
