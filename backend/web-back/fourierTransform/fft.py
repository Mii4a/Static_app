import io
import pathlib
import numpy as np
import scipy.io
from scipy import signal

from .models import FourierTransform
import pandas as pd

def setPlt(pk):
  fft_object = FourierTransform.objects.get(file=pk)
  file_path = pathlib.Path(bwaves_file)