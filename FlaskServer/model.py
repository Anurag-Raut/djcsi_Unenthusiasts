
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from sklearn.linear_model import LinearRegression


store_sales = pd.read_csv('train.csv')

store_sales['date'] = pd.to_datetime(store_sales['date'])

store_sales['date'] = store_sales['date'].dt.to_period('M')

monthly_sales = store_sales.groupby("date").sum().reset_index()

monthly_sales['date'] = monthly_sales['date'].dt.to_timestamp()

# print(monthly_sales)

# plt.figure(figsize=(15,5))
# plt.plot(monthly_sales['date'],monthly_sales['sales'])
# plt.xlabel('Date')
# plt.ylabel('Sales')
# plt.show()

monthly_sales['sales_diff'] = monthly_sales['sales'].diff()
monthly_sales = monthly_sales.dropna()
# print(monthly_sales.head(10)
supervised_data = monthly_sales.drop(['date','sales'],axis=1)
for i in range(1,13):
    col_name = 'month_' + str(i)
    supervised_data[col_name] = supervised_data['sales_diff'].shift(i)
supervised_data = supervised_data.dropna().reset_index(drop=True)

# print(supervised_data.head())

train_data = supervised_data[:-12]
test_data = supervised_data[-12:]

scaler = MinMaxScaler(
    feature_range=(-1,1)
)

scaler.fit_transform(train_data)

train_data = scaler.transform(train_data)
test_data = scaler.transform(test_data)

x_train, y_train = train_data[:,1:], train_data[:,0:1]
x_test, y_test = test_data[:,1:], test_data[:,0:1]
y_train = y_train.ravel()
y_test = y_test.ravel()

sales_dates = monthly_sales['date'][-12:].reset_index(drop=True)
predict_df = pd.DataFrame(sales_dates)

act_sales = monthly_sales['sales'][-13:].to_list()

lr_model = LinearRegression()
lr_model.fit(x_train,y_train)

lr_pred = lr_model.predict(x_test)

lr_pred = lr_pred.reshape(-1,1)
lr_pred_test_set = np.concatenate([lr_pred,x_test],axis=1)

lr_pred_test_set = scaler.inverse_transform(lr_pred_test_set)

result_list = []
for index in range(0,len(lr_pred_test_set)):
    result_list.append(lr_pred_test_set[index][0]+act_sales[index])

lr_pred_series =pd.Series(result_list,name="Linear Prediction")

predict_df = predict_df.merge(lr_pred_series,left_index=True,right_index=True)

# lr_mse = np.sqrt(mean_squared_error(predict_df['Linear Prediction'],monthly_sales['sales'][-12:]))

# print(predict_df)

data_2 = predict_df['Linear Prediction'].to_dict()

print(data_2)

def final_prediction():
    return data_2
