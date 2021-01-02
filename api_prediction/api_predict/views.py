from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api_predict.service import service
import numpy as np
import pandas as pd

class PredictionView(APIView):
    def get(self, request):
        """
        http://127.0.0.1:8000/prediction/?square=0.21135646687697163&ngang=0.41666666666666663&duong=1.0&huong_E=0&huong_EN=0&huong_ES=0&huong_N=0&huong_S=0&huong_W=0&huong_WN=0&huong_WS=0&huong__=1&district_badinh=0&district_binhtan=0&district_camle=0&district_caugiay=0&district_cuchi=0&district_haichau=0&district_hbt=0&district_hoavang=0&district_lienchieu=0&district_nguhanhson=0&district_quan7=1&district_sontra=0&district_thanhkhe=0
        """
        feature = ['square', 'ngang', 'duong', 'huong_E', 'huong_EN', 'huong_ES', 'huong_N', 'huong_S', 'huong_W',
                   'huong_WN', 'huong_WS', 'huong__', 'district_badinh', 'district_binhtan', 'district_camle',
                   'district_caugiay', 'district_cuchi', 'district_haichau', 'district_hbt', 'district_hoavang',
                   'district_lienchieu', 'district_nguhanhson', 'district_quan7', 'district_sontra',
                   'district_thanhkhe']
        init_param = np.zeros((1, len(feature)))
        for i in range(len(feature)):
            init_param[0][i] = request.query_params.get('' + feature[i], 0)
        result = service.predict_price(init_param)[0][0]
        return Response(dict(data=result))
