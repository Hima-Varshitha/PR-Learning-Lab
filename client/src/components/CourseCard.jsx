import "./CourseCard.css";

function CourseCard({
  title,
  category,
  description,
  level,
  duration,
  price,
  shortName,
  theme,
}) {
  return (
    <article className="course-card">
      <div className={`course-card__thumbnail course-card__thumbnail--${theme}`}>
        <span className="course-card__short-name">
          {shortName}
        </span>

        <span className="course-card__category">
          {category}
        </span>
      </div>

      <div className="course-card__content">
        <div className="course-card__metadata">
          <span>{level}</span>
          <span aria-hidden="true">•</span>
          <span>{duration}</span>
        </div>

        <h3 className="course-card__title">
          {title}
        </h3>

        <p className="course-card__description">
          {description}
        </p>

        <div className="course-card__footer">
          <div>
            <span className="course-card__price-label">
              Course fee
            </span>

            <p className="course-card__price">
              {price}
            </p>
          </div>

          <a
            className="course-card__link"
            href="#course-details"
            aria-label={`View details for ${title}`}
          >
            View course
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;