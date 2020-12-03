import {useState} from 'react';
import {createId} from 'lib/createId';

const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'}
];
const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    //获取需要修改的标签的下标
    const index = findTagIndex(id);
    //深拷贝 tags 得到 tagsClone
    const tagsClone = JSON.parse(JSON.stringify(tags));
    //把tagsClone的第index项删除，替换为{id: id, name: obj.name}
    tagsClone.splice(index, 1, {id: 1, name: obj.name});
    setTags(tagsClone);
  };
  const deleteTag = (id:number) => {
    //获取需要删除的标签的下标
    const index = findTagIndex(id);
    //深拷贝 tags 得到 tagsClone
    const tagsClone = JSON.parse(JSON.stringify(tags));
    //把tagsClone的第index项删除}
    tagsClone.splice(index, 1);
    setTags(tagsClone);
  }
  return {
    tags,
    setTags,
    findTag,
    findTagIndex,
    updateTag,
    deleteTag
  };
};

export {useTags};