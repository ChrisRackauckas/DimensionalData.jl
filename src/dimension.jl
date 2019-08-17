
abstract type AbstractParametricDimension{X,T,M} <: AbstractDimension{T,M} end

"""
A generic dimension. For use when custom dims are required when loading
data from a file. The sintax is ugly and verbose to use for indexing, 
ie `Dim{:lat}(1:9)` rather than `Lat(1:9)`. This is the main reason 
they are not the only type of dimension availabile.
"""
struct Dim{X,T,M} <: AbstractParametricDimension{X,T,M} 
    val::T
    metadata::M
    Dim{X}(val, metadata) where X = 
        new{X,typeof(val),typeof(metadata)}(val, metadata)
end

@inline Dim{X}(val=:; metadata=nothing) where X = Dim{X}(val, metadata)
dimname(::Type{<:Dim{X}}) where X = "Dim $X"
basetype(::Type{<:Dim{X,T,N}}) where {X,T,N} = Dim{X}


"""
    @dim typ name [shortname=name]
Macro to easily define specific dimensions.
"""
macro dim(typ, name=string(typ), shortname=string(typ))
    esc(quote
        struct $typ{T,M} <: AbstractDimension{T,M}
            val::T
            metadata::M
        end
        $typ(val=:; metadata=nothing) = $typ(val, metadata)
        DimensionalData.dimname(::Type{<:$typ}) = $name
        DimensionalData.shortname(::Type{<:$typ}) = $shortname
    end)
end

# Define some common dimensions
@dim Time
@dim Lat "Latitude"
@dim Lon "Longitude"
@dim Vert "Vertical"
