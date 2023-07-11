import Button from "@/components/elements/button";
import ProjectLayout from "@/components/layout/projectLayout";
import Image from "next/image";

const House = () => {
  return (
    <ProjectLayout
      title="House Price Prediction"
      createdAt="April 2023"
      tags={[
        "Scikit-Learn",
        "Seaborn",
        "Matplotlib",
        "Regression",
        "EnsembleLearning",
      ]}
    >
      <p className="mt-3">
        In this project, I built a machine learning model to predict house
        prices based on the features of the house. The dataset used the dataset
        from Kaggle House Prices Advanced Regression Techniques competition
        which contains 81 columns. The dataset is splitted into training set and
        validation set. The training set contains 1460 data and the validation
        set contains 1459 data.
      </p>

      <p>
        In the Exploratory Data Analysis step, I found many rows with missing
        values. This can be fixed by using imputation to fll in the data.
        Another issue is outlier values. I used the IQR method to detect and
        remove the outlier values which can be seen in Figure 1.
      </p>
      <div className="flex flex-col my-6">
        <div className="relative h-[450px] w-full mx-auto">
          <Image
            src="/images/house/house2.png"
            alt="leafin"
            fill
            className="rounded-xl object-contain"
          />
        </div>
        <small className="mx-auto">Figure 1 Old Values</small>
      </div>
      <p>After data outlier removal, this below is the new data</p>
      <div className="flex flex-col my-6">
        <div className="relative h-[450px] w-full mx-auto">
          <Image
            src="/images/house/house3.png"
            alt="leafin"
            fill
            className="rounded-xl object-contain"
          />
        </div>
        <small className="mx-auto">Figure 2 New Values</small>
      </div>
      <p>
        I performed feature extraction by plotting the correlation matrix as a
        heatmap.{" "}
      </p>
      <div className="flex flex-col my-6">
        <div className="relative h-[450px] w-full mx-auto">
          <Image
            src="/images/house/house1.png"
            alt="leafin"
            fill
            className="rounded-xl object-contain"
          />
        </div>
        <small className="mx-auto">Figure 3 Correlation Heatmap</small>
      </div>
      <p>
        To further improve the model performance, I normalize the data using the
        MinMaxScaler and encode the categorical data using the OneHotEncoder.
        The normalized features are then used to train the model. I used 5
        different regression algorithms and 5 ensemble learning algorithms. The
        result can be seen in Figure 4, which shows that the error changing
        during the training process.
      </p>
      <div className="flex flex-col my-6">
        <div className="relative h-[450px] w-full mx-auto">
          <Image
            src="/images/house/house4.png"
            alt="leafin"
            fill
            className="rounded-xl object-contain"
          />
        </div>
        <small className="mx-auto">Figure 4 Learning Result</small>
      </div>
      <p>
        Compared to the other algorithms, the Extreme Gradient Boosting has the
        lowest error, which is 21281.717294469523
      </p>
      <div className="flex flex-col my-6">
        <div className="relative h-[450px] w-full mx-auto">
          <Image
            src="/images/house/house5.png"
            alt="leafin"
            fill
            className="rounded-xl object-contain"
          />
        </div>
        <small className="mx-auto">Figure 5 RMSE Comparison</small>
      </div>
      <Button
        href="https://drive.google.com/file/d/1rSnqceQVzO8PIaih6UuyynSmAzMijrXH/view?usp=sharing"
        className="mr-4"
      >
        Code Repository
      </Button>
      <Button
        href="https://drive.google.com/file/d/11b54ywvPTdEMj2by1TkKjHJnxi9Fbv2V/view?usp=sharing"
        type="secondary"
      >
        Implementation Paper
      </Button>
    </ProjectLayout>
  );
};

export default House;
