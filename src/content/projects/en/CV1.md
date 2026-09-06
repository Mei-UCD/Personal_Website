---
title: Defect Detection for Muffler
description: Developed a machine vision inspection solution for automotive component manufacturing. Optimized image acquisition conditions and defect detection algorithms to improve the accuracy and reliability of visual inspection.
image: /images/CV1/1.png
category: ImageProcessing
---

## Project Background

This project focuses on the appearance inspection of automotive exhaust-related components. Industrial cameras are used for image acquisition, combined with OpenCV image processing and AI-based defect detection models to automatically inspect and evaluate specified areas.

The project is mainly developed using C++ and AI, implementing a complete visual inspection process from image preprocessing and inspection area extraction to AI inference and detection result output.

## Tech Stack

| Category                | Technology / Tool                            | Purpose                                                                                           |
| ----------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Programming Language    | C++                                          | Development of the visual inspection program and implementation of the AI inference workflow      |
| Image Processing        | OpenCV                                       | Image preprocessing, ROI extraction, Mask processing, contour processing, Template Matching, etc. |
| AI                      | RoxyAI                                       | Training and inference of defect detection models                                                 |
| AI Inference            | RoxyAI Inspect Server                        | Calling trained AI models from the C++ program                                                    |
| Development Environment | Visual Studio                                | C++ development, debugging, and compilation                                                       |
| Version Control         | Git / GitHub                                 | Project code management and version control                                                       |
| Image Acquisition       | NED Line Scan Camera                         | Product image acquisition                                                                         |
| Lighting                | LEIMAC Linear Dome Lighting / Angle Lighting | Lighting optimization based on different defect characteristics                                   |
| Equipment Control       | Hardware Trigger                             | Controlling the start and stop timing of camera image acquisition                                 |

## Inspection Objects

This project focuses on appearance defect inspection of multiple specified areas on two types of automotive exhaust components: J61 and J62.

The inspection objects are:

J61 and J62

The main inspection areas include:

- J61 & J62 circumferential weld area
- J61 & J62 end area
- J61 & J62 Boss hole
- J61 & J62 marking area
- J62 seating surface

## Inspection Defects

| Inspection Area           | Inspection Items                                                                                                                          |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Circumferential weld area | Rough surface, micro holes, cracks                                                                                                        |
| End area                  | Spatter adhesion                                                                                                                          |
| Seating surface           | Spatter adhesion                                                                                                                          |
| Boss hole                 | Spatter adhesion                                                                                                                          |
| Marking area              | Character scratches, missing characters, character displacement, double stamping, faint characters, spatter, character position deviation |

## Inspection Flow

The overall visual inspection process can be summarized as:

```text
Industrial Camera
    ↓
Raw Image
    ↓
Rule-based Image Processing
    ↓
Inspection Area Extraction
    ↓
AI Defect Detection
    ↓
Detection Zone / Score
    ↓
Result Evaluation
    ↓
OK / NG
```

C++ is mainly responsible for image preprocessing and preparing suitable input image data for AI, while the AI model is responsible for defect detection in the specified inspection areas.

## Industrial Imaging Environment Design

### Camera and Lighting Selection

The accuracy of industrial visual inspection depends not only on subsequent image processing and AI models but also directly on the quality of image acquisition.

To obtain stable images suitable for defect detection, different camera and lighting solutions were compared and evaluated during the initial verification stage. Since the inspection objects are automotive exhaust components, the products are relatively large, and the customer also has a Cycling Time requirement of 10 seconds, from the start of image acquisition to the display of the inspection result. In addition, challenges include metallic surface reflections, curved structures, and different types of defects. Area scan cameras and bar-type surface lighting were difficult to use to satisfy the requirements for inspection time and defect contrast.

Therefore, considering the need for high resolution, high-speed continuous imaging, and large-area inspection, a NED Line Scan Camera was selected for image acquisition. LEIMAC Linear Dome Lighting and Angle Lighting were used according to the imaging characteristics of different defects.

```text
NED Line Scan Camera
       ↓
Continuous Product Movement / Rotation
       ↓
Line-by-Line Image Acquisition
       ↓
Complete Product Image
```

Different lighting methods were selected according to the actual inspection area:

| Lighting Method      | Main Characteristics                                                                                   | Applicable Scenario                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| Linear Dome Lighting | Provides relatively uniform surface illumination and reduces direct reflections from metallic surfaces | Defects requiring observation of the overall surface condition     |
| Angle Lighting       | Illuminates the product surface from a specific angle and enhances local surface variations            | Highlighting surface irregularities and attached foreign materials |

Suitable lighting conditions were selected according to different inspection objects and defect characteristics instead of using a single light source for all inspection items.

### Hardware Trigger

Due to the strict Cycling Time requirement, the product does not need to complete a full rotation for image acquisition. Instead, images are captured within a specified rotation range according to the angular position of different inspection areas.

For the marking inspection area, the area enters the effective camera acquisition range only when the product rotates to a specific angle range. Therefore, a Hardware Trigger is used to control when image acquisition starts and stops.

```text
Product Starts Rotating
    ↓
Rotates to the Specified Angle
    ↓
Start Hardware Trigger
    ↓
Continuous Image Acquisition by Line Scan Camera
    ↓
Complete Target Area Acquisition
    ↓
Stop Hardware Trigger
    ↓
End Rotation
```

Compared with rotating the product through a full revolution, this approach reduces unnecessary rotation and image acquisition time, thereby shortening the overall Cycling Time.

## Inspection Algorithm Design

After determining the camera, lighting, and image acquisition conditions, an overall inspection algorithm needs to be designed based on the actual inspection objects and defect characteristics.

Not all industrial visual inspection tasks are suitable for the same detection method. Therefore, before formal program development, the image characteristics of each inspection area need to be analyzed to determine which parts can be handled using traditional image processing and which parts require AI.

In this project, the automotive components are made of metal. In addition to actual defects, the product surface also contains normal features such as stains, scratches, textures, and reflections.

If only Rule-based image processing methods based on fixed thresholds, area, and shape are used for defect evaluation, some normal features may be incorrectly classified as NG, resulting in a large number of false positives.

Therefore, this project uses a **Rule-based image processing + AI** combination.

Rule-based image processing is mainly responsible for:

- Inspection area localization
- Template Matching / Mask processing
- Character position detection
- Exclusion of irrelevant areas

The AI model is mainly responsible for detecting defects that are difficult to evaluate stably using fixed rules in traditional image processing.

### Algorithm Design for Different Inspection Areas

According to different inspection objects, two different inspection workflows were adopted.

#### Circumferential Weld Area, End Area, Seating Surface, and Boss Hole

For these areas, the corresponding inspection region is first extracted using Rule-based image processing. The extracted region is then directly input into a trained AI model for defect evaluation.

```text
Raw Image
    ↓
Rule-based Image Processing
    ↓
Inspection Area Extraction
    ↓
AI Model
    ↓
Detection Zone / Score
    ↓
OK / NG
```

#### Marking Area

The inspection workflow for the marking area is different from the other inspection areas.

First, Rule-based image processing is used to detect the position of the marked characters and determine whether the overall character position is within the specified range.

Character position deviation is a problem with a clearly defined positional relationship, so AI is not required. Instead, it is directly evaluated using Rule-based image processing.

If the character position is judged to be normal, the marked character region is further extracted and input into the corresponding AI model for the detection of other marking defects.

```text
Raw Image
    ↓
Rule-based Image Processing
    ↓
Marked Character Position Detection
    ↓
Is the Character Position Normal?
    │
    ├── NG → Character Position Deviation
    │
    └── OK
          ↓
      Extract Marked Characters
          ↓
       AI Model
          ↓
Detection Zone / Score
          ↓
      OK / NG
```

The AI model is mainly responsible for detecting:

- Character scratches
- Missing characters
- Character displacement
- Double stamping
- Faint characters
- Spatter

Therefore, the marking area does not use AI to evaluate all defects. Instead, different detection methods are selected according to the characteristics of each defect.

### Final Inspection Architecture

By combining all inspection areas, the project adopts a hybrid **Rule-based + AI** inspection architecture.

```text
                         Raw Image
                            ↓
                  Rule-based Image Processing
                            ↓
              ┌─────────────┴─────────────┐
              ↓                           ↓
      Inspection Area Extraction     Character Position Detection
              ↓                           ↓
          AI Model                  Is Position Normal?
              ↓                     ┌─────┴─────┐
     Detection Zone / Score         ↓           ↓
              ↓                    NG          OK
            OK/NG                    ↓           ↓
                       Character Position     Extract Marked
                            Deviation           Characters
                                                ↓
                                             AI Model
                                                ↓
                                      Detection Zone / Score
                                                ↓
                                              OK/NG
```

## C++ Image Preprocessing

After acquiring the raw image, image preprocessing is performed according to the input requirements of subsequent algorithms.

The main processing steps include:

- Grayscale conversion
- Image resizing
- Inspection area extraction using Template Matching and Mask methods

The main purposes of image preprocessing are:

1. Reducing the influence of irrelevant areas on the inspection result
2. Reducing the computational load of subsequent processing and shortening inspection time

For different inspection areas, the following areas require extraction using Template Matching or Mask methods:

- J61 marking area
- J62 seating surface
- J62 marking area

## AI Model Training

RoxyAI is used to train defect detection models, and the trained models are applied to the C++ inspection program.

During training, images of normal and defective products are prepared, and defect regions are annotated.

The training data mainly includes:

- Normal samples
- Defective samples

After model training is completed, input images are processed through inference and detection results are generated.

The main output results include:

- Detection Zone
- Detection Score
- Defect position
- Defect evaluation result

Based on the Detection Score and the configured threshold, it can be further determined whether a defect exists in the current inspection area.

The final output includes:

- J61 & J62 circumferential weld area AI model
- J61 marking area AI model
- J62 marking area AI model
- J61 & J62 end area AI model
- J61 & J62 seating surface AI model
- J61 & J62 Boss hole AI model

## C++ and RoxyAI Inspect Server Integration

After completing image processing and RoxyAI model training, the trained models need to be deployed into the C++ inspection program.

This project uses RoxyAI Inspect Server to provide AI inference functionality. The C++ program is responsible for preparing input images, calling the Inspect Server for inference, and receiving the detection results returned by the model.

The overall architecture is as follows:

```text
C++ Inspection Program
      │
      │ Input Image
      ↓
Image Preprocessing
      │
      │ ROI / Resize / Padding
      ↓
RoxyAI Inspect Server
      │
      │ AI Inference
      ↓
Detection Result
      │
      │ Zone / Score / Position
      ↓
C++ Post-processing
      │
      ↓
OK / NG
```

## AI Model Optimization

During the AI model Sample Data inspection process, some inspection areas still showed False Positive and False Negative results.

A False Positive means that an actual OK area is classified as NG by the AI model, while a False Negative means that an actual defect is classified as OK.

The following inspection areas were observed to have False Positives and False Negatives:

| Inspection Area           | Inspection Issue                                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Circumferential weld area | Normal features such as micro holes and cracks were incorrectly classified as defects, while some False Negatives also occurred |
| End area                  | False Positives and False Negatives for spatter adhesion                                                                        |
| Seating surface           | False Positives and False Negatives for spatter adhesion                                                                        |
| Boss hole                 | False Positives and False Negatives for spatter adhesion                                                                        |

### Cause Analysis

After analyzing the inspection results, the main possible causes were:

- Insufficient Sample Data
- Normal areas containing textures or structures similar to defects

In particular, some OK Samples contained textures or structures highly similar to the target defects. If these Samples were directly included in the training data, the AI model might learn these defect-like features as normal features, which could affect its defect detection capability.

Therefore, the optimization process needs to focus not only on the quantity of Sample Data but also on screening the content of the training data.

### Optimization Method

For False Positives and False Negatives found during inspection, the corresponding Sample Data was analyzed and the training data was adjusted.

```text
Sample Data
    ↓
AI Model Training
    ↓
Testing
    ↓
False Positive / False Negative Found
    ↓
Confirm Problem Area
    ↓
Analyze OK / NG Samples
    ↓
Screen OK Samples Similar to Defects
    ↓
Remove Unsuitable Samples
    ↓
Retraining
    ↓
Retesting
```

## Project Results

During the development of this project, the main industrial vision inspection solution was designed and the core inspection program was developed.

The main completed work includes:

- Completed the design verification and optimization of industrial cameras, lighting, and image acquisition conditions
- Designed a hybrid Rule-based + AI inspection solution based on different inspection areas and inspection items
- Used C++ and OpenCV to implement image preprocessing, Template Matching extraction, Mask processing, and character position detection
- Used RoxyAI to train defect detection models for multiple inspection areas
- Implemented the main inspection workflow from image input and inspection area extraction to AI inference and OK / NG evaluation
- Analyzed and optimized Sample Data for False Positive and False Negative issues in AI models

Due to a job change, I did not participate in the subsequent on-site debugging, final performance verification, or customer communication for the project.

The main inspection programs and development content were organized and handed over to the colleagues responsible for continuing the development and customer communication.

## Project Summary

Through this project, a complete industrial vision inspection workflow was developed, covering industrial image acquisition, C++ image preprocessing, AI-based defect detection, and C++ inference deployment.

The project involved not only traditional image processing algorithms but also AI model training, model inference, and detection result optimization.

Compared with a simple image processing demo, industrial vision projects place greater emphasis on stability in real production environments, inspection speed, and deployability.

Through this project, practical experience was gained in the following technologies and engineering challenges:

- Industrial cameras and image acquisition
- C++ image preprocessing
- AI model training
- Model analysis and optimization
- Deployment of industrial vision algorithms
