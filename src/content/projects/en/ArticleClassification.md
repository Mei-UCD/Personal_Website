---
title: Text Classification
description: A machine learning project that applies NLP, traditional ML, and deep learning models to classify news articles
image: /images/ArticleClassification/data_final.jpg
category: DataScience
---

### 🧭 Project Background

**GitHub**: [View Repository](https://github.com/Mei-UCD/MachineLearning_TextClassification)

This project is the final coursework for the _Machine Learning_ class during my master’s program.  
The goal is to predict the category of a news article based on its short description (`short_description`).  
Through text preprocessing, feature extraction, and comparison between traditional machine learning models and deep learning models, the project ultimately builds a high-performing classification model.

**Data Source**: News Category Dataset provided by Rishabh Misra  
[Dataset Link](https://www.researchgate.net/publication/332141218_News_Category_Dataset)

---

### 🧱 Tech Stack

- Python, Pandas, NumPy
- Scikit-learn
- TensorFlow / Keras
- Matplotlib, Seaborn (Visualization)

---

### 🧩 Project Structure & Main Tasks

| Task ID | Task Name                       | Main Content                                           |
| ------- | ------------------------------- | ------------------------------------------------------ |
| Task 1  | Data Understanding              | Data loading, word frequency analysis, sentence length |
| Task 2  | Preprocessing & Model Training  | Data split, text preprocessing, ML & DL modeling       |
| Task 3  | Model Evaluation & Optimization | Metrics, confusion matrix, visualization, model tuning |

---

### 🧑‍💻 Implementation Details

## Task 1: Data Understanding

- **Data Loading**
  - Dataset contains 6 columns: `category`, `headline`, `authors`, `link`, `short_description`, `date`
  - Only `category` (limited to **IMPACT** and **PARENTING**) and `short_description` are used
  - Total samples: 8,000

- **Word Frequency Analysis**
  - Preprocessing: contraction expansion, stopword removal
  - Used `CountVectorizer` to extract high-frequency words for each class
    - **PARENTING**: Top 20 frequent & least frequent words
      <div style="display:flex; flex-direction:column; align-items:center;">
        <img src="/images/ArticleClassification/data1.jpg" style="width:90%;">
      </div>

    - **IMPACT**: Top 20 frequent & least frequent words
      <div style="display:flex; flex-direction:column; align-items:center;">
        <img src="/images/ArticleClassification/data2.jpg" style="width:90%;">
      </div>

  - Example: converting `"don't"` → `"do not"`

- **Sentence Length Statistics**
  - PARENTING: average ~30 words
  - IMPACT: average ~26 words

- **Missing Value Handling**
  - 275 missing samples detected and removed
  - Remaining samples: 7,725

---

## Task 2: Data Preprocessing & Modeling

- **Dataset Split**
  - Training set: 50% (3,862 samples)
  - Validation set: 20% (1,538 samples)
  - Test set: 30% (2,318 samples)

- **Text Preprocessing**
  - Contraction expansion, stopword removal
  - Bag-of-Words representation using `CountVectorizer`

- **Traditional Machine Learning Models**
  - Decision Tree
  - Naive Bayes

- **Deep Learning Model (Custom-built)**
  - Text preprocessing: contraction expansion, punctuation removal, tokenization, padding (max length = 150)
  - Label encoding
  - Network architecture:  
    **Embedding → Flatten → Dense (ReLU) → Output (Sigmoid)**
  - Training settings:
    - Loss: Binary Cross-Entropy
    - Optimizer: Adam
    - Batch size: 32
    - Epochs: 10
  - Training visualization: accuracy & loss curves
    <div style="display:flex; gap:10px; align-items:center;">
      <img src="/images/ArticleClassification/data_dp1.jpg" alt="Accuracy" style="width:45%;">
      <img src="/images/ArticleClassification/data_dp2.jpg" alt="Loss" style="width:45%;">
    </div>

---

## Task 3: Model Evaluation & Optimization

### (1) Traditional Model Performance

- **Decision Tree (Validation Set)**  
  _(Classification report and confusion matrix shown below)_

- **Naive Bayes (Validation Set)**  
  _(Classification report and confusion matrix shown below)_

> Decision Tree slightly outperformed Naive Bayes, but overall performance remained limited.

---

### (2) Deep Learning Model Performance

- Accuracy reached **84%**, outperforming traditional models, but overfitting was observed
  <div style="display:flex; gap:10px; align-items:center;">
    <img src="/images/ArticleClassification/data_dpbefore.jpg" alt="Accuracy" style="width:90%;">
  </div>

- Validation classification report shows strong performance on **PARENTING**, but relatively weaker recall for **IMPACT**

---

### (3) Model Optimization Attempts

- More refined preprocessing:
  - Stopword removal
  - Lowercasing
  - Lemmatization
- Traditional models showed no improvement or even performance degradation
- Multiple deep learning architecture experiments:

| Model Architecture                          | Validation Accuracy | Notes                |
| ------------------------------------------- | ------------------- | -------------------- |
| Embedding + Flatten + Dense                 | 85%                 | Overfitting remains  |
| Embedding + GlobalAveragePooling1D          | **87%**             | Best performance     |
| Embedding + Conv1D + GlobalAveragePooling1D | 85%                 | No clear improvement |

---

### (4) Cross Validation

- Combined training + validation sets
- 5-fold cross validation results:

| Model         | Average Accuracy |
| ------------- | ---------------- |
| Decision Tree | 68% ~ 70%        |
| Naive Bayes   | 68% ~ 70%        |
| Deep Learning | 83% ~ 85%        |

> Deep learning models consistently outperform traditional methods.

---

### (5) Test Set Performance

- Best model (Optimization 2) evaluated on `test.csv` (2,318 samples)
- Performance remained stable with **86% accuracy**
- IMPACT recall is lower than PARENTING, reflecting class imbalance

---

### (6) Expanded Training Set & Final Model

- Retrained best model using combined training + validation data
- Observations:
  - Overall accuracy remained stable
  - **IMPACT** recall and F1-score improved significantly
  - Macro F1-score increased → more balanced classification
  - Larger training data improved generalization ability

---

### 📈 Summary

- Traditional machine learning models (Decision Tree, Naive Bayes) showed limited performance on this task
- Custom deep learning model (**Embedding + GlobalAveragePooling1D**) significantly improved accuracy and generalization
- Detailed text preprocessing had limited impact on traditional models, but provided measurable benefits for deep learning models
