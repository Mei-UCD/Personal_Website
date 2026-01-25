---
title: Sentiment Analysis
description: A lexicon- and rule-based sentiment analysis project for analyzing positive and negative tendencies in movie reviews
image: /images/SentimentalAnalysis/cover.png
category: DataScience
---

### 🧭 Project Background

**GitHub**: [Visit Repository](https://github.com/Mei-UCD/Text_Sentimental_Analysis)

This project is the final assignment of the **Artificial Intelligence** course during my master's studies.  
Its goal is to analyze the sentiment tendency (positive or negative) of movie review texts.

Through text preprocessing, sentiment lexicon matching, and rule-based technical methods, sentiment scoring and statistical analysis of reviews are achieved.

---

### 🧱 Technology Stack

- Python, Pandas, NumPy
- NLTK (tokenization, stopword removal, lemmatization)
- Matplotlib (visualization)

---

### 🧩 Project Structure and Main Tasks

| Task ID | Task Name                         | Main Content                                                                                 |
| ------- | --------------------------------- | -------------------------------------------------------------------------------------------- |
| Task 1  | Data Understanding                | Data loading, review length statistics, missing value handling                               |
| Task 2  | Text Preprocessing and Scoring    | Tokenization, stopword removal, lemmatization, sentiment word counting and score calculation |
| Task 3  | Result Analysis and Visualization | Positive/negative ratio statistics, score distribution and word frequency plots              |

---

### 🧑‍💻 Implementation Details

#### Task 1: Data Loading

- The dataset contains the following columns:  
  `Rating`, `Title`, `Date`, `Helpful_Vote`, `Total_Vote`, `Review`, `Movie`
- Total number of samples: **2,146**

#### Task 2: Target Data Extraction

- Analysis is conducted on the `Review` column, which contains the review text.

#### Task 3: Text Preprocessing

- Downloaded tokenization data from NLTK and performed tokenization on each extracted `Review`
- Removed punctuation, converted text to lowercase, applied stopword filtering, and performed lemmatization

#### Task 4: Sentiment Lexicon Analysis

- Downloaded `pos_words.txt` (containing positive sentiment words) and `neg_words.txt` (containing negative sentiment words) from GitHub
- For each review:
  - Count the number of positive words (`pos_count`)
  - Count the number of negative words (`neg_count`)
  - Calculate the sentiment score (`sentiment`):

  ```math
  \text{sentiment} = \frac{\text{pos\_count} - \text{neg\_count}}{\text{total\_len}}
  ```

#### Task 5: Visualization Results

- Group the `review` data according to sentiment scores
- Plot bar charts
    <div style="display:flex; flex-direction:column; align-items:center;">
        <img src="/images/SentimentalAnalysis/cover.png" style="width:90%;">
    </div>

---

### 📈 Summary

Using a lexicon-based sentiment analysis approach, this project achieved automated evaluation of sentiment tendencies in movie reviews.  
Without using machine learning models, it relies only on text cleaning and sentiment lexicons to effectively determine positive and negative sentiment for over 2,000 reviews, and visualize the sentiment distribution patterns.

This process helped me gain a deeper understanding of:

- The complete NLP preprocessing workflow (tokenization, stopword removal, lemmatization)
- The advantages and disadvantages of rule-based sentiment analysis methods
- How to build an end-to-end text analysis pipeline from scratch

This project laid the foundation for my understanding of **text processing** and **sentiment analysis**, and sparked my interest in further studying machine learning and deep learning.
