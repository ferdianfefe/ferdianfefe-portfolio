import Button from "@/components/elements/button";
import ProjectLayout from "@/components/layout/projectLayout";
import Image from "next/image";

const Vaccine = () => {
  return (
    <ProjectLayout
      title="H1N1 and Seasonal Flu Vaccines Tendency"
      createdAt="May 2023"
      tags={["CatBoost", "GradientBoosting", "ScikitLearn", "TailwindCSS"]}
    >
      <div className="flex flex-col">
        <p className="mt-3">
          This project is a group project for the Find IT Data Analytics
          Competition 2023. In this project, we are given a dataset of H1N1 and
          Seasonal Flu Vaccines Tendency. The dataset contains 26707 rows and 36
          columns. The dataset is divided into two parts, the training set and
          the test set. The training set contains 26707 rows and 36 columns,
          while the test set contains 26708 rows and 35 columns. The training
          set is used to train the model, while the test set is used to test the
          model. The dataset contains 26707 rows and 36 columns. The dataset is
          divided into two parts, the training set and the test set. The
          training set contains 26707 rows and 36 columns, while the test set
          contains 26708 rows and 35 columns. The training set is used to train
          the model, while the test set is used to test the model.
        </p>
        <br />
        <p>
          First of all, we conducted Exploratory Data Analysis to learn the
          pattern in data. We use several methods of data visualization and plot
          a feature against another feature. This way, we will be able to
          understand the correlation among data features.
        </p>
        <div className="my-6 flex flex-col items-center">
          <div className="relative h-[300px] w-full mx-auto">
            <Image
              src="/images/vaccine/vaccine1.png"
              alt="leafin"
              fill
              className="rounded-xl object-contain"
            />
          </div>
          <small className="mx-auto">
            Figure 1 Numerical Data Bivariate Analysis
          </small>
        </div>
        <div className="my-6 flex flex-col items-center">
          <div className="relative h-[300px] w-full mx-auto">
            <Image
              src="/images/vaccine/vaccine2.png"
              alt="leafin"
              fill
              className="rounded-xl object-contain"
            />
          </div>
          <small className="mx-auto">
            Figure 2 Categorical Data Bivariate Analysis
          </small>
        </div>
        <p>
          We also plotted a heatmap to see the correlation among features. From
          the heatmap, we can see that there are some features that have a
          strong correlation with the target variable. We can also see that
          there are some features that have a strong correlation with each
          other. This means that we can drop some features to reduce the
          dimensionality of the dataset.
        </p>
        <div className="my-6 flex flex-col items-center">
          <div className="relative h-[500px] w-full mx-auto">
            <Image
              src="/images/vaccine/vaccine3.png"
              alt="leafin"
              fill
              className="rounded-xl object-contain"
            />
          </div>
          <small className="mx-auto">Figure 3 Correlation Heatmap</small>
        </div>
        <p>
          In addition to that, we also conducted feature selection using a
          statistical method, p-value, which is used to determine the
          significance of a feature. We were recursively removing features with
          the highest p-value until all features have a p-value less than 0.005.
        </p>
        <br />
        <p>
          The next step is to handle missing values. We used imputation method
          to fill the missing values. We used the mean value for numerical
          features and the mode value for categorical features.
        </p>
        <br />
        <p>
          Since we have 2 targets, we trained 2 models, one for each target. We
          used CatBoost Classifier for the model which predicts H1N1 and
          seasonal vaccine. As the final metric of performance, we used ROC AUC
          curve. The ROC AUC curve is a plot of the true positive rate against
          the false positive rate. The area under the curve (AUC) is a measure
          of the model's performance. The higher the AUC, the better the model
          is. Overall, the model achieved 0.87 and 0.87 for H1N1 and seasonal
          vaccine, respectively.
        </p>
        <div className="my-6 flex flex-col items-center">
          <div className="relative h-[500px] w-full mx-auto">
            <Image
              src="/images/vaccine/vaccine5.png"
              alt="leafin"
              fill
              className="rounded-xl object-contain"
            />
          </div>
          <small className="mx-auto">Figure 4 H1N1 Vaccine ROC AUC Curve</small>
        </div>
        <div className="my-6 flex flex-col items-center">
          <div className="relative h-[500px] w-full mx-auto">
            <Image
              src="/images/vaccine/vaccine4.png"
              alt="leafin"
              fill
              className="rounded-xl object-contain"
            />
          </div>
          <small className="mx-auto">
            Figure 5 Seasonal Vaccine ROC AUC Curve
          </small>
        </div>
      </div>

      <Button
        href="https://colab.research.google.com/drive/1NjdLLrWAbAEhxslG2V8BNGV8O4OV_rO2?authuser=3"
        className="mr-4"
      >
        Code Repository
      </Button>
    </ProjectLayout>
  );
};

export default Vaccine;
