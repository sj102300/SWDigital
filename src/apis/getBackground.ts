import axios, { AxiosError, AxiosResponse } from "axios";
import { responseDTO } from "..";
// import { apiClient } from "./apiClient";


export async function GetBackgroundImage(): Promise<string> {

    try{
        let response: AxiosResponse<responseDTO<{
            backgroundImageUrl: string;
        }>> = await axios.get(`https://43.202.161.19:8080/api/main/image`);

        if (response.data.statusCode === 200){
            return response.data.data.backgroundImageUrl;
        }
        else {
            throw AxiosError<{
                statusCode: number;
                message: string;
            }>
        }
    }
    catch(err){
        console.log(err);
        alert('배경 이미지 불러오기 실패');
        return '';
    }
}