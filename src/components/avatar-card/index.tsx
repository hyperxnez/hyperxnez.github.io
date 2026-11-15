import { FALLBACK_IMAGE } from '../../constants';
import { Profile } from '../../interfaces/profile';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';

interface AvatarCardProps {
  profile: Profile | null;
  loading: boolean;
  avatarRing: boolean;
  resumeFileUrl?: string;
}

/**
 * Renders an AvatarCard component.
 * @param profile - The profile object.
 * @param loading - A boolean indicating if the profile is loading.
 * @param avatarRing - A boolean indicating if the avatar should have a ring.
 * @param resumeFileUrl - The URL of the resume file.
 * @returns JSX element representing the AvatarCard.
 */
const AvatarCard: React.FC<AvatarCardProps> = ({
  profile,
  loading,
  avatarRing,
  resumeFileUrl,
}): React.JSX.Element => {
  return (
    <div className="card card-sm bg-base-100 border border-base-300 shadow-none rounded-2xl">
      <div className="grid place-items-center py-7 px-6">
        {loading || !profile ? (
          <div className="avatar opacity-90">
            <div className="mb-5 rounded-2xl w-28 h-28">
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-full',
                shape: '',
              })}
            </div>
          </div>
        ) : (
          <div className="avatar">
            <div
              className={`mb-5 rounded-2xl w-28 h-28 border border-base-300 ${
                avatarRing
                  ? 'ring-2 ring-primary ring-offset-base-100 ring-offset-2'
                  : ''
              }`}
            >
              {
                <LazyImage
                  src={profile.avatar ? profile.avatar : FALLBACK_IMAGE}
                  alt={profile.name}
                  placeholder={skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-full',
                    shape: '',
                  })}
                />
              }
            </div>
          </div>
        )}
        <div className="text-center mx-auto w-full">
          <h5 className="font-semibold text-xl tracking-tight">
            {loading || !profile ? (
              skeleton({
                widthCls: 'w-40',
                heightCls: 'h-7',
                className: 'mx-auto',
              })
            ) : (
              <span className="text-base-content">{profile.name}</span>
            )}
          </h5>
          {(loading || !profile || profile.bio) && (
            <div className="mt-2.5 text-sm text-base-content/75 leading-relaxed">
              {loading || !profile
                ? skeleton({
                    widthCls: 'w-48',
                    heightCls: 'h-5',
                    className: 'mx-auto',
                  })
                : profile.bio}
            </div>
          )}
        </div>
        {resumeFileUrl &&
          (loading ? (
            <div className="mt-5">
              {skeleton({ widthCls: 'w-40', heightCls: 'h-8' })}
            </div>
          ) : (
            <a
              href={resumeFileUrl}
              target="_blank"
              className="btn btn-outline btn-sm text-xs mt-5 border-base-300 hover:border-base-content/40"
              download
              rel="noreferrer"
            >
              Download Resume
            </a>
          ))}
      </div>
    </div>
  );
};

export default AvatarCard;
