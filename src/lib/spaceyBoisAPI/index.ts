import {createApi} from '@reduxjs/toolkit/query/react';
import {apiConfig} from '@root/lib/spaceyBoisAPI/config'

export const spaceyBoisApi = createApi(apiConfig)

export const {useLoginMutation, useRegisterMutation} = spaceyBoisApi;
