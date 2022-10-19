function ListResult() {

    return (
        <div class="container">
            <div class="py-5">
                <div class="sm:flex grid items-center px-5 py-2">
                    <span class="sm:w-1/1 inline sm:hidden">
                        <span class="text-xs uppercase text-gray-600 font-bold">Sonuçlar</span>
                    </span>
                    <span class="sm:w-1/2 hidden sm:inline">
                        <span class="text-xs uppercase text-gray-600 font-bold">Yorum</span>
                    </span>
                    <span class="sm:w-1/3 hidden sm:inline">
                        <span class="text-xs uppercase text-gray-600 font-bold">Yorumcu</span>
                    </span>
                    <span class="sm:w-1/5 md:text-center hidden sm:inline">
                        <span class="text-xs uppercase text-gray-600 font-bold">Randevu</span>
                    </span>

                </div>

                <div v-for="(contact, key) in contacts" class="hover:bg-gray-200 cursor-pointer bg-white shadow 
                sm:flex p-2 mb-5 rounded-lg">
                    <div class="sm:w-1/2">
                        <span class="capitalize text-gray-600 text-sm text-left">Loerm ipsum dolor as a das das as a ...</span>
                    </div>
                    <div class="sm:w-1/3">
                        <div class="flex items-center">
                            <img src="contact.picture.thumbnail" class="rounded-full" />
                            <div class="ml-4">
                                <span class="capitalize block text-gray-800">M. Emin Kırgil</span>
                                <span class="text-sm block text-gray-600"></span>
                            </div>

                        </div>
                    </div>
                    <div class="sm:w-1/5 sm:text-center">
                        <span class="capitalize text-gray-600 text-sm "> [@]</span>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default ListResult