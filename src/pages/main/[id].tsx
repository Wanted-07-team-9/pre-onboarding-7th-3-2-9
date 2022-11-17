import { useRouter } from 'next/router';
import { GetPost } from '../../hooks/useDetail';
import Detail from '../../Layout/BankLayout/DetailLayout/Detail';
import * as S from '../../styles/MainStyle';
import Aside from '../../Layout/BankLayout/Aside';
import Heading from '../../Layout/BankLayout/Heading';

function DetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = GetPost(Number(id));

  return (
    <S.MainLayout>
      <Aside />
      <S.MainRightArea>
        <Heading />
        <Detail detailData={data} />
      </S.MainRightArea>
    </S.MainLayout>
  );
}

export default DetailPage;
