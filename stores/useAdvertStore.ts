import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import { nanoid } from "nanoid";

type UseAdvertStoreType = {
  adverts: AdvertType[];
  addAdvert: (data: IAdvertFormType) => void;
  incrementFavoriteCount: (id: string) => void;
  decrementFavoriteCount: (id: string) => void;
  sortByCreatedAt: () => void;
  sortByFavoriteCount: () => void;
  deleteAdvert: (id: string) => void;
};

const useAdvertStore = create<UseAdvertStoreType>()(
  devtools(
    persist(
      (set) => ({
        adverts: [],
        deleteAdvert: (id: string) => {
          set((state) => ({
            adverts: state.adverts.filter((advert) => advert.id !== id),
          }));
        },
        sortByFavoriteCount: () => {
          set((state) => ({
            adverts: state.adverts.sort((a, b) => {
              const favoriteComparison = b.favoriteCount - a.favoriteCount;

              if (favoriteComparison === 0) {
                return (
                  new Date(b.updatedAt).getTime() -
                  new Date(a.updatedAt).getTime()
                );
              }

              return favoriteComparison;
            }),
          }));
        },
        sortByCreatedAt: () => {
          set((state) => ({
            adverts: state.adverts.sort((a, b) => {
              return (
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
              );
            }),
          }));
        },
        decrementFavoriteCount: (id: string) => {
          set((state) => ({
            adverts: state.adverts.map((advert) => {
              if (advert.id === id && advert.favoriteCount > 0) {
                return {
                  ...advert,
                  favoriteCount: advert.favoriteCount - 1,
                  updatedAt: new Date().toISOString(),
                };
              }
              return advert;
            }),
          }));
        },
        incrementFavoriteCount: (id: string) => {
          set((state) => ({
            adverts: state.adverts.map((advert) => {
              if (advert.id === id) {
                return {
                  ...advert,
                  favoriteCount: advert.favoriteCount + 1,
                  updatedAt: new Date().toISOString(),
                };
              }
              return advert;
            }),
          }));
        },
        addAdvert: (data: IAdvertFormType) => {
          const now = new Date().toISOString();

          const newAdvert: AdvertType = {
            ...data,
            favoriteCount: 0,
            createdAt: now,
            updatedAt: now,
            id: nanoid(),
          };

          set((state) => ({
            adverts: [...state.adverts, newAdvert],
          }));
        },
      }),
      {
        skipHydration: true,
        name: "advert-store",
      }
    )
  )
);

export default useAdvertStore;
