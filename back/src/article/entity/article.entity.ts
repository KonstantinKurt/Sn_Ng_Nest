import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
} from 'typeorm';
import {ProfileEntity} from '../../profile/entity/profile.entity';

@Entity('Article')
export class ArticleEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    title: string;

    @Column('text')
    content: string;

    @Column({
        type: 'text',
        default: `${process.env.DEV_APP_URL}/article/photo/default_article.png`,
    })
    photo: string;

    @ManyToOne(type => ProfileEntity, profile => profile.articles)
    author: ProfileEntity;

    @CreateDateColumn()
    createdAt: Date;
}
