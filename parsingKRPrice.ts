const parsingKRPrice = (price?: number): string => {
  if (typeof price !== 'number' && price !== undefined) {
    throw new Error('Please check your type of argument. It muse be Number');
  } else {
    if (price === undefined) {
      return '0';
    } else {
      return price?.toLocaleString('ko-kr');
    }
  }
};

/*
! RN에서 안드로이드에 적용 안 되는 이슈

## android/app/build.gradle



해당 위치에서 기존 파일

```
def jscFlavor = 'org.webkit:android-jsc:+'
```
부분을 다음과 같이 변경한다.



```
def jscFlavor = 'org.webkit:android-jsc-intl:+'
```
*/
