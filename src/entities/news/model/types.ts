import type { CategoriesType } from "@/entities/category";

export interface INews {
	author: string;
	category: CategoriesType[]; // Нужен фикс кросс импорта 
	description: string;
	id: string;
	image: string;
	language: string;
	published: string;
	title: string;
	url: string;
}

export interface NewsApiResponse {
	news: INews[];
	page: number;
	status: string;
}