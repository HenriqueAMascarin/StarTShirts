import MainContainer from "@src/modules/InApp/components/containers/main/MainContainer";
import LoadingScreen from "@src/components/suspense/loading/LoadingScreen";

export default function LoadingPageScreen(){
    return(
        <MainContainer>
          <LoadingScreen />
        </MainContainer>
    )
}