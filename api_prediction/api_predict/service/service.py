import numpy as np
import pandas as pd
import pickle


def predict_price(request):
    loaded_model = pickle.load(open("./api_predict/service/regressor.sav", 'rb'))
    result = loaded_model.predict(request)
    return result

