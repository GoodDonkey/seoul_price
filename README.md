seoul_price 입니다.

pull 했을 때 충돌(영민님 커밋이랑 내 donkey edit 충돌) -> merge하시오 -> 충돌난 상태에서 add, commit (conflict merge) -> push됨

이때 conflict merge 할 때에는 영민님이 api, crawler 지웠지만 내 커밋으로 반영되서 살아남. css 수정사항도 내것으로 반영된듯??

해볼것 : 내 파일에서 수정하고 나서 commit을 하지 않은 채로 상대방이 push한 수정사항을 pull 해보기 
-> 내 commit하지 않은 수정사항들은 pull했을 때 자동 merge되서 사라질 것인가??
-> 아니면 거부되고나서 내가 stash하고나서 pull이 가능할 것인가??
-> 그다음 stash된 변경사항과 pull한 변경사항을 비교해서 수정가능할까??
