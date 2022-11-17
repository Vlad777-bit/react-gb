import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedRedux';
import { checkedProfile } from '../../store/Profile/slice';
import { ProfileProps } from './Profile.props';

export const Profile: FC<ProfileProps> = () => {
  const { cheked } = useAppSelector((state) => state.profileReducer);
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(checkedProfile(!cheked));
  };

  return (
    <div>
      <h2>Profile</h2>
      <input type="checkbox" checked={cheked} onChange={handleChange} />
    </div>
  );
};
