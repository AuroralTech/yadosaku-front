import { Section } from "@/components/PlanDetail/Section";
import { ImageGallery } from "@/components/PlanDetail/ImageGallery";
import type { PlanDetailType, SectionDefinitionType } from "@/types/plan";
import Image from "next/image";
export const PlanSection = ({
  section,
  data,
}: {
  section: SectionDefinitionType;
  data: PlanDetailType;
}) => {
  switch (section.type) {
    case "description":
      const descriptionData = data.descriptions.find(
        (d) => d.id === section.descriptionId
      );
      if (!descriptionData) return null;

      return (
        <Section title={section.title} variant={section.variant}>
          <div className="space-y-2">
            {descriptionData.content.map((text, index) => (
              <p
                key={index}
                className="text-muted leading-relaxed whitespace-pre-line"
              >
                {text}
              </p>
            ))}
          </div>
        </Section>
      );

    case "facility":
      return (
        <Section title={section.title} variant={section.variant}>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(data.facility).map(([key, value]) => (
              <div key={key}>
                <span className="text-sm text-muted block">{key}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </Section>
      );

    case "meal":
      const mealData = data.meals.find(
        (meal) => meal.type === section.mealType
      );
      if (!mealData) return null;

      return (
        <Section title={section.title} variant={section.variant}>
          <div className="space-y-4">
            <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
              <h3
                className={`text-xl font-bold text-primary ${
                  mealData.description ? "mb-1" : ""
                }`}
              >
                {mealData.name}
              </h3>

              {mealData.description && (
                <p className="text-sm text-muted">{mealData.description}</p>
              )}
            </div>
            {mealData.images && mealData.images.length > 0 && (
              <div
                className={`grid gap-4 ${
                  mealData.images.length > 1
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {mealData.images.map((image, index) => (
                  <div key={index} className="relative aspect-[16/9]">
                    <Image
                      src={image}
                      alt={`${mealData.name} - 画像${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            )}
            {mealData.sections.map((mealSection) => (
              <Section
                key={mealSection.title}
                title={mealSection.title}
                items={mealSection.items.map((item) => ({
                  text: item,
                  icon: mealSection.icon || "bullet",
                }))}
              />
            ))}
            {mealData.allergens && (
              <div className="bg-orange-50 border-l-4 border-orange-200 rounded-lg p-4 mt-6 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-orange-400">ⓘ</span>
                  <h4 className="font-medium text-orange-700">
                    アレルギー品目
                  </h4>
                </div>
                <p className="text-sm text-orange-600/90 pl-6">
                  {mealData.allergens.join("、")}
                </p>
              </div>
            )}
          </div>
        </Section>
      );

    case "schedule":
      return (
        <Section title={section.title} variant={section.variant}>
          <div className="space-y-4">
            {data.schedule.map((item) => (
              <div key={item.time} className="flex items-start">
                <span className="text-primary font-medium w-24 shrink-0">
                  {item.time}
                </span>
                <span className="text-muted">{item.description}</span>
              </div>
            ))}
          </div>
        </Section>
      );

    case "list":
      const listData = data.list.find((item) => item.title === section.title);
      if (!listData) return null;

      return (
        <Section
          title={section.title}
          variant={section.variant}
          items={listData.content.map((item) => ({
            text: item,
            icon: listData.icon === "none" ? undefined : listData.icon,
          }))}
        />
      );

    case "image":
      return (
        <Section title={section.title} variant={section.variant}>
          <ImageGallery images={data.images} />
        </Section>
      );

    default:
      return null;
  }
};
