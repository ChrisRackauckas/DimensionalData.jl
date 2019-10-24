var documenterSearchIndex = {"docs":
[{"location":"#DimensionalData.jl-1","page":"DimensionalData.jl","title":"DimensionalData.jl","text":"","category":"section"},{"location":"#","page":"DimensionalData.jl","title":"DimensionalData.jl","text":"Modules = [DimensionalData]\nOrder   = [:module, :type, :function, :macro]","category":"page"},{"location":"#DimensionalData.DimensionalData","page":"DimensionalData.jl","title":"DimensionalData.DimensionalData","text":"DimensionalData.jl provides types and methods for indexing with named dimensions, using named dimensions in Base and Statistics methods instead of Integer dims, and selecting data from dimension values instead of using indices directly.\n\nDimensions are simply types that wrap values. They both store dimension values and are used for dimension lookup or indices, ranges or dimension number. X, Y,ZandTime` are the unexported defaults, add this line to use them:  \n\nusing DimensionalData: X, Y, Z, Time\n\nSelectors find indices in the dimension based on values At, Near, or Between the passed in value(s).\n\nThese are some examples of valid syntax:\n\n# Indexing with dim wrappers\na[X(1:10), Y(1:4)]\n# Dim wrappers and a selector\na[X(1:10), Y<|At(25.7)]\n# Unitful.jl selectors. Without dim wrappers selectors must be in the right order\na[Near(23\"s\"), Between(10.5u\"m\", 50.5u\"m\")]\n# Dim type used instead of a dimension number\nmean(a; dims=X)\n\n\n\n\n\n","category":"module"},{"location":"#DimensionalData.AbstractDimension","page":"DimensionalData.jl","title":"DimensionalData.AbstractDimension","text":"An AbstractDimension tags the dimensions in an AbstractArray.\n\nIt can also contain spatial coordinates and their metadata. For simplicity, the same types are used both for storing dimension information and for indexing.\n\n\n\n\n\n","category":"type"},{"location":"#DimensionalData.At","page":"DimensionalData.jl","title":"DimensionalData.At","text":"At(x)\n\nSelector that exactly matches the value on the passed-in dimensions, or throws an error.  For ranges and arrays, every value must match an existing value - not just the end points. \n\n\n\n\n\n","category":"type"},{"location":"#DimensionalData.Between","page":"DimensionalData.jl","title":"DimensionalData.Between","text":"Between(a, b)\n\nSelector that retreive all indices located between 2 values.\n\n\n\n\n\n","category":"type"},{"location":"#DimensionalData.Dim","page":"DimensionalData.jl","title":"DimensionalData.Dim","text":"A generic dimension. For use when custom dims are required when loading data from a file. The sintax is ugly and verbose to use for indexing,  ie Dim{:lat}(1:9) rather than Lat(1:9). This is the main reason  they are not the only type of dimension availabile.\n\n\n\n\n\n","category":"type"},{"location":"#DimensionalData.DimensionalArray","page":"DimensionalData.jl","title":"DimensionalData.DimensionalArray","text":"DimensionalArray(A::AbstractArray, dims::Tuple, refdims::Tuple)\n\nA basic DimensionalArray type.\n\nMaintains and updates its dimensions through transformations\n\n\n\n\n\n","category":"type"},{"location":"#DimensionalData.DimensionalArray-Tuple{AbstractArray,Any}","page":"DimensionalData.jl","title":"DimensionalData.DimensionalArray","text":"DimensionalArray(A::AbstractArray, dims::Tuple; refdims=())\n\nConstructor with optional refdims keyword.\n\nExample:\n\nusing Dates, DimensionalData\nusing DimensionalData: Time, X\ntimespan = DateTime(2001):Month(1):DateTime(2001,12)\nA = DimensionalArray(rand(12,10), (Time(timespan), X(10:10:100))) \nA[X<|Near([12, 35]), Time<|At(DateTime(2001,5))]\nA[Near(DateTime(2001, 5, 4)), Between(20, 50)]\n\n\n\n\n\n","category":"method"},{"location":"#DimensionalData.Near","page":"DimensionalData.jl","title":"DimensionalData.Near","text":"Near(x)\n\nSelector that selects the nearest index to its contained value(s)\n\n\n\n\n\n","category":"type"},{"location":"#DimensionalData.Order","page":"DimensionalData.jl","title":"DimensionalData.Order","text":"Trait container for dimension and array ordering\n\nThe default is Forward(), Forward()\n\n\n\n\n\n","category":"type"},{"location":"#DimensionalData.Selector","page":"DimensionalData.jl","title":"DimensionalData.Selector","text":"Selectors indicate that index values are not indices, but points to  be selected from the dimension values, such as DateTime objects on a Time dimension.\n\n\n\n\n\n","category":"type"},{"location":"#DimensionalData.dims","page":"DimensionalData.jl","title":"DimensionalData.dims","text":"dims(x)\n\nReturn a tuple of the dimensions for a dataset. These can  contain the coordinate ranges if bounds() and select() are to be used,  or you want them to be shown on plots in place of the array indices.\n\nThey can also contain a units string or unitful unit to use and plot  dimension units.\n\nThis is the only method required for this package to work. It probably  requires defining a dims field on your object to store dims in.\n\n\n\n\n\n","category":"function"},{"location":"#DimensionalData.dims-Tuple{Any,Any}","page":"DimensionalData.jl","title":"DimensionalData.dims","text":"Get the dimension(s) matching the type(s) of the lookup dimension.\n\n\n\n\n\n","category":"method"},{"location":"#DimensionalData.label","page":"DimensionalData.jl","title":"DimensionalData.label","text":"label(x)\n\nGet a plot label for data or a dimension. This will include the name and units  if they exist, and anything else that should be shown on a plot.\n\n\n\n\n\n","category":"function"},{"location":"#DimensionalData.metadata","page":"DimensionalData.jl","title":"DimensionalData.metadata","text":"metadata(x)\n\nReturn the metadata of a dimension or data object.\n\n\n\n\n\n","category":"function"},{"location":"#DimensionalData.name","page":"DimensionalData.jl","title":"DimensionalData.name","text":"name(x)\n\nGet the name of data or a dimension.\n\n\n\n\n\n","category":"function"},{"location":"#DimensionalData.refdims","page":"DimensionalData.jl","title":"DimensionalData.refdims","text":"refdims(x)\n\nReference dimensions for an array that is a slice or view of another  array with more dimensions. \n\nslicedims(a, dims) returns a tuple containing the current new dimensions and the new reference dimensions. Refdims can be stored in a field or disgarded,  as it is mostly to give context to plots. Ignoring refdims will simply leave some  captions empty.\n\n\n\n\n\n","category":"function"},{"location":"#DimensionalData.shortname","page":"DimensionalData.jl","title":"DimensionalData.shortname","text":"shortname(x)\n\nGet the short name of array data or a dimension.\n\n\n\n\n\n","category":"function"},{"location":"#DimensionalData.units","page":"DimensionalData.jl","title":"DimensionalData.units","text":"units(x)\n\nReturn the units of a dimension. This could be a string, a unitful unit, or nothing. \n\n\n\n\n\n","category":"function"},{"location":"#DimensionalData.val","page":"DimensionalData.jl","title":"DimensionalData.val","text":"val(x)\n\nReturn the contained value of a wrapper object, otherwise just returns the object.\n\n\n\n\n\n","category":"function"},{"location":"#DimensionalData.AbstractDimCombination","page":"DimensionalData.jl","title":"DimensionalData.AbstractDimCombination","text":"AbstractCombined holds mapping that require multiple dimension when select() is used, shuch as for situations where they share an affine map or similar transformation instead of linear maps. Each dim that shares the mapping must contain the same (identical) object.\n\nDimensions holding a DimCombination will work as usual for direct indexing.\n\nAll AbstractDimension are assumed to val and metadata fields.\n\n\n\n\n\n","category":"type"},{"location":"#DimensionalData.AbstractParametricDimension","page":"DimensionalData.jl","title":"DimensionalData.AbstractParametricDimension","text":"Dimensions with user-set type paremeters\n\n\n\n\n\n","category":"type"},{"location":"#DimensionalData.Forward","page":"DimensionalData.jl","title":"DimensionalData.Forward","text":"Trait indicating that the array or dimension is in the normal forward order. \n\n\n\n\n\n","category":"type"},{"location":"#DimensionalData.Reverse","page":"DimensionalData.jl","title":"DimensionalData.Reverse","text":"Trait indicating that the array or dimension is in the reverse order.  Selector lookup or plotting will be reversed.\n\n\n\n\n\n","category":"type"},{"location":"#Base.permutedims-Tuple{Tuple{Vararg{AbstractDimension,N}} where N,Union{Array{#s15,1} where #s15<:Integer, Tuple{#s14,Vararg{Any,N} where N} where #s14<:Integer}}","page":"DimensionalData.jl","title":"Base.permutedims","text":"Sort dimensions into the order they take in the array.\n\nMissing dimensions are replaced with nothing\n\n\n\n\n\n","category":"method"},{"location":"#DimensionalData.dimnum-Tuple{Any,Any}","page":"DimensionalData.jl","title":"DimensionalData.dimnum","text":"Get the number of an AbstractDimension as ordered in the array\n\n\n\n\n\n","category":"method"},{"location":"#DimensionalData.dims2indices","page":"DimensionalData.jl","title":"DimensionalData.dims2indices","text":"Convert a tuple of AbstractDimension to indices, ranges or Colon.\n\n\n\n\n\n","category":"function"},{"location":"#DimensionalData.formatdims-Union{Tuple{N}, Tuple{T}, Tuple{AbstractArray{T,N},Tuple}} where N where T","page":"DimensionalData.jl","title":"DimensionalData.formatdims","text":"Format the dimension to match internal standards.\n\nMostily this means converting tuples and UnitRanges to LinRange, which is easier to handle.\n\nErrors are thrown if dims don't match the array dims or size.\n\n\n\n\n\n","category":"method"},{"location":"#DimensionalData.rebuild","page":"DimensionalData.jl","title":"DimensionalData.rebuild","text":"rebuild(x, data, [dims], [refdims])\n\nRebuild an object struct with an updated value \n\n\n\n\n\n","category":"function"},{"location":"#DimensionalData.reducedims-Tuple{Any,Any}","page":"DimensionalData.jl","title":"DimensionalData.reducedims","text":"Replace the specified dimensions with an index of 1 to match a new array size where the dimension has been reduced to a length of 1, but the number of dimensions has not changed.\n\nUsed in mean, reduce, etc.\n\n\n\n\n\n","category":"method"},{"location":"#DimensionalData.slicedims-Tuple{Any,Tuple{Vararg{AbstractDimension,N}} where N}","page":"DimensionalData.jl","title":"DimensionalData.slicedims","text":"Slice the dimensions to match the axis values of the new array\n\nAll methods returns a tuple conatining two tuples: the new dimensions, and the reference dimensions. The ref dimensions are no longer used in the new struct but are useful to give context to plots.\n\nCalled at the array level the returned tuple will also include the previous reference dims attached to the array.\n\n\n\n\n\n","category":"method"},{"location":"#DimensionalData.@dim","page":"DimensionalData.jl","title":"DimensionalData.@dim","text":"@dim typ [name=string(typ)] [shortname=string(typ)]\n\nMacro to easily define specific dimensions.\n\nExample:\n\n@dim Lat \"Lattitude\"\n\n\n\n\n\n","category":"macro"}]
}
