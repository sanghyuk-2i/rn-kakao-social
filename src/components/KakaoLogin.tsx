import React, { useEffect, useState } from 'react';
import {
  KakaoOAuthToken,
  KakaoProfileNoneAgreement,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';
import CheckSocial from '../utils/CheckSocial';
import { Button, SafeAreaView, Text, View } from 'react-native';

const KakaoLogin = (): JSX.Element => {
  const [result, setResult] = useState<string>('');
  const [aToken, setAToken] = useState<string>('');
  const [access, setAccess] = useState<string>('');
  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();
    setAToken(JSON.stringify(token));
    setAccess(token.accessToken);
  };

  const signOutWithKakao = async (): Promise<void> => {
    const message = await logout();
    setResult(message);
  };

  const getIdProfile = async (): Promise<void> => {
    const profile: KakaoProfile | KakaoProfileNoneAgreement = await getKakaoProfile();
    setResult(JSON.stringify(profile));
  };

  const unlinkKakao = async (): Promise<void> => {
    const message = await unlink();
    setResult(message);
  };

  useEffect(() => {
    access !== '' && CheckSocial(access);
  }, [access]);

  return (
    <SafeAreaView>
      <Text>Access : {aToken}</Text>
      <Text>------------------------</Text>
      <Text>Result : {result}</Text>
      <View>
        <Button title="로그인" onPress={() => signInWithKakao()} />
        <Button title="로그아웃" onPress={() => signOutWithKakao()} />
        <Button title="프로필 정보" onPress={() => getIdProfile()} />
        <Button title="연결 해제" onPress={() => unlinkKakao()} />
      </View>
    </SafeAreaView>
  );
};

export default KakaoLogin;
