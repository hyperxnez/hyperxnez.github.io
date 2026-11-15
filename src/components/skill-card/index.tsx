import { SanitizedSkillGroup } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const normalizeSkillGroups = (
  skills: Array<string | SanitizedSkillGroup>,
): SanitizedSkillGroup[] => {
  const flatItems: string[] = [];
  const groups: SanitizedSkillGroup[] = [];

  for (const entry of skills) {
    if (typeof entry === 'string') {
      flatItems.push(entry);
    } else if (entry.items.length > 0) {
      groups.push(entry);
    }
  }

  if (flatItems.length > 0) {
    groups.unshift({ category: '', items: flatItems });
  }

  return groups;
};

const SkillCard = ({
  loading,
  skills,
}: {
  loading: boolean;
  skills: Array<string | SanitizedSkillGroup>;
}) => {
  const groups = normalizeSkillGroups(skills);

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>,
      );
    }

    return array;
  };

  return (
    <div className="card card-sm bg-base-100 border border-base-300 shadow-none rounded-2xl">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title text-base">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-7' })
            ) : (
              <span className="text-base-content/80 font-semibold">
                Tech Stack
              </span>
            )}
          </h5>
        </div>
        <div className="px-3 pb-3 pt-1">
          {loading ? (
            <div className="flex flex-wrap justify-start gap-1.5">
              {renderSkeleton()}
            </div>
          ) : (
            <div className="space-y-3.5">
              {groups.map((group, groupIndex) => (
                <div key={group.category || groupIndex}>
                  {group.category && (
                    <div className="text-[11px] font-mono uppercase tracking-wider text-base-content/55 mb-1.5">
                      {group.category}
                    </div>
                  )}
                  <div className="flex flex-wrap justify-start gap-1.5">
                    {group.items.map((skill, index) => (
                      <div
                        key={index}
                        className="badge badge-sm bg-base-200/80 border border-base-300 text-base-content/85 font-medium rounded-md px-2.5 py-2.5"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
